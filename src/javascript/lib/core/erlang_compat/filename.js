function join(arg = [], extra = []) {
  let components = Array.isArray(arg) ? arg : [arg];
  components = components.concat(extra)
  let names = [];
  for (let i = components.length - 1; i >= 0; i--) {
    const name = components[i];
    const normalized_name = name.replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
    names.push(normalized_name);
    if (name[0] == '/') {
      names.push('');
      break;
    }
  }
  return names.reverse().join('/');
}
export default {
  join,
};
