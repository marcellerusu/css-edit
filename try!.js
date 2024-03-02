export default function try__b(lambda) {
  return (...args) => {
    try {
      return lambda(...args);
    } catch (err) {
      if (!(err instanceof Error)) err = new Error(err);
      return { err, args };
    }
  };
}
