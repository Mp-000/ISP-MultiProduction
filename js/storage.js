const DB = {
  get(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  push(key, value) {
    const data = this.get(key);
    data.push(value);
    this.set(key, data);
  },
  update(key, index, value) {
    const data = this.get(key);
    data[index] = value;
    this.set(key, data);
  },
  delete(key, index) {
    const data = this.get(key);
    data.splice(index, 1);
    this.set(key, data);
  }
};
