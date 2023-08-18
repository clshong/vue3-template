export const getCodeOfRandom = () => {
  // 所需随机抽取的样本数组
  let nums = new Array(
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  );
  // 初始化 拼接字符串
  let str = '';
  for (let i = 0; i < 4; i++) {
    //每次生成一个0 - 61 之间的 number 作为随机获取验证码的下标
    let p = Math.floor(Math.random() * 1000) % 36;
    //拼接验证码  随机抽取大小写字母和数字
    str += nums[p];
  }
  return str;
};
