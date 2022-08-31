import Generator, {
  defaultCommonSettings,
  defaultGlobalSettings,
  defaultSettings,
} from 'fr-generator';
import React from 'react';

const NewWidget = ({ value = 0, onChange }) => (
  <button onClick={() => onChange(value + 1)}>{value}</button>
);

const Demo = () => {
  console.log(defaultSettings, defaultCommonSettings, defaultGlobalSettings);

  return (
    <div style={{ height: '50vh' }}>
      <Generator
        widgets={{ NewWidget }}
        settings={[
          {
            title: '个人信息',
            widgets: [
              {
                text: '计数器',
                name: 'asyncSelect',
                schema: {
                  title: '计数器',
                  type: 'number',
                  widget: 'NewWidget',
                },
                setting: {
                  api: { title: 'api', type: 'string' },
                },
              },
              {
                text: '姓名',
                name: 'name',
                schema: {
                  title: '输入框',
                  type: 'string',
                },
                setting: {
                  maxLength: { title: '最长字数', type: 'number' },
                },
              },
              {
                text: 'object',
                name: 'object',
                schema: {
                  title: '对象',
                  type: 'object',
                  properties: {},
                },
                setting: {},
              },
              {
                text: 'array',
                name: 'array',
                schema: {
                  title: '数组',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {},
                  },
                },
                setting: {},
              },
            ],
          },
        ]}
        commonSettings={{
          description: {
            title: '自定义共通用的入参',
            type: 'string',
          },
        }}
      />
    </div>
  );
};

export default Demo;
