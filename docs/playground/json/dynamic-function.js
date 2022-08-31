module.exports = {
  schema: {
    type: 'object',
    properties: {
      input: {
        title: '动态函数检验',
        description: '动态函数检验，存储的是纯函数',
        type: 'string',
        rules: [
          {
            validator: (rule, value) => value === 'muji',
            message: '输入的值不等于muji,请重新输入！',
          },
        ],
      },
    },
  },
};
