import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// Node de test complet
const nodeTest = {
  id: '2',
  type: 'lookup-tool',
  data: {
    type: 'tool',
    title: 'Lookup messages',
    config: {
      dataset: 'Content-to-moderate',
      lookupColumns: ['User_ID'],
      dataColumns: ['User_ID'],
      retrievalMode: 'single' as const,
      maxRecords: 10,
      description: '',
    },
  },
  position: { x: 100, y: 100 },
};

// const nodeTest2 = {
//   id: '4',
//   type: 'main-agent',
//   data: {
//     type: 'agent',
//     title: 'CallSummarizer',
//     config: {
//       llm: 'mistral-small', // ou 'Mistral small' selon tes options
//       purpose: 'Send the following agenda to [attendees] via [Slack/email]: [agenda details].',
//       systemPrompt: '',
//     },
//   },
//   position: { x: 300, y: 100 },
// };

// Mapping pour le rendu des champs
const FIELD_RENDER: Record<
  string,
  | { type: 'select'; options: string[] }
  | { type: 'textarea' }
  | { type: 'number' }
  | { type: 'input' }
> = {
  llm: { type: 'select', options: ['mistral', 'openai', 'anthropic', 'meta'] },
  purpose: { type: 'textarea' },
  systemPrompt: { type: 'textarea' },
  dataset: { type: 'select', options: ['Content-to-moderate', 'Users', 'Products'] },
  retrievalMode: { type: 'select', options: ['single', 'multiple'] },
  maxRecords: { type: 'number' },
  lookupColumns: { type: 'input' },
  dataColumns: { type: 'input' },
  description: { type: 'textarea' },
};

// Types pour les configs
type ToolConfig = {
  dataset?: string;
  lookupColumns?: string[];
  dataColumns?: string[];
  retrievalMode?: 'single' | 'multiple';
  maxRecords?: number;
  description?: string;
  llm?: string;
  purpose?: string;
  systemPrompt?: string;
};

// Helpers typés
const isArray = (value: unknown): value is unknown[] => Array.isArray(value);
const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';

// DynamicConfigPanel typé
type DynamicConfigPanelProps<T extends object> = {
  config: T;
  setConfig: (cfg: T) => void;
};

const DynamicConfigPanel = <T extends object>({
  config,
  setConfig,
}: DynamicConfigPanelProps<T>) => (
  <div className="flex flex-col gap-4">
    {Object.entries(config).map(([key, value]) => {
      const field = FIELD_RENDER[key] || { type: 'input' };
      return (
        <div key={key} className="flex flex-col gap-2">
          <Label>{key.charAt(0).toUpperCase() + key.slice(1)}*</Label>
          {field.type === 'select' ? (
            <Select
              value={String(value)}
              onValueChange={(val) => setConfig({ ...config, [key]: val } as T)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={`Select ${key}`} />
              </SelectTrigger>
              <SelectContent>
                {field.options.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : field.type === 'textarea' ? (
            <>
              <Textarea
                placeholder="Placeholder"
                value={String(value)}
                onChange={(e) => setConfig({ ...config, [key]: e.target.value } as T)}
                className="resize-none"
              />
              <p className="text-sm text-muted-foreground">
                {key === 'description' ? 'Add a description for this tool' : ''}
              </p>
            </>
          ) : field.type === 'number' ? (
            <Input
              type="number"
              value={Number(value)}
              onChange={(e) => setConfig({ ...config, [key]: Number(e.target.value) } as T)}
            />
          ) : field.type === 'input' ? (
            <Input
              placeholder="Placeholder"
              value={isArray(value) ? value.join(', ') : String(value)}
              onChange={(e) =>
                setConfig({
                  ...config,
                  [key]: isArray(value)
                    ? e.target.value.split(',').map((s) => s.trim())
                    : e.target.value,
                } as T)
              }
            />
          ) : isBoolean(value) ? (
            <Input
              type="checkbox"
              checked={value}
              onChange={(e) => setConfig({ ...config, [key]: e.target.checked } as T)}
            />
          ) : (
            <Input
              placeholder="Placeholder"
              value={String(value)}
              onChange={(e) => setConfig({ ...config, [key]: e.target.value } as T)}
            />
          )}
        </div>
      );
    })}
  </div>
);

const ToolConfigPanel: React.FC = () => {
  const [config, setConfig] = useState<ToolConfig>(nodeTest.data.config);

  return <DynamicConfigPanel config={config} setConfig={setConfig} />;
};

export default ToolConfigPanel;
