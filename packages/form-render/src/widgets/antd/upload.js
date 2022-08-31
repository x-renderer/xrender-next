import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { get } from 'lodash-es';
import React from 'react';

export default function FrUpload({
  action,
  value,
  onChange,
  uploadProps,
  buttonProps,
  schema,
}) {
  const props = {
    name: 'file',
    type: 'file',
    action, // 旧的兼容
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`);
        const path = get(schema, 'props.path', '');
        const url = path
          ? get(info.file.response, path)
          : info.file.response.url;
        onChange(url);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    },
    onRemove() {
      onChange('');
    },
    ...uploadProps,
  };

  const defaultBtnProps = {
    icon: <UploadOutlined />,
    children: '上传',
  };

  const btnProps = {
    ...defaultBtnProps,
    ...buttonProps,
  };

  return (
    <div className="fr-upload-mod">
      <Upload {...props} className="fr-upload-file">
        <Button {...btnProps} />
      </Upload>
      {value && (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="fr-upload-preview"
        >
          已上传地址
        </a>
      )}
    </div>
  );
}
