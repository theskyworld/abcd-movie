// 判断是否为空的对象
export default function isEmptyObj(obj: Object) {
  for (let key in obj) {
    return false;
  }
  return true;
}
