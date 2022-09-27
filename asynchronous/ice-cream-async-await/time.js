function time(ms, open) {
  return new Promise((resolve, reject) => {
    if (open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}

module.exports.time = time;
