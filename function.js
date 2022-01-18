function strictEquals(a, b) {
  let equals = Object.is(a, b);
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    equals = false;
    return equals;
    console.log(equals);
  }
  if (Object.is(a, -0) && Object.is(b, 0)) {
    equals = true;
    return equals;
    console.log(equals);
  }
  if (Object.is(a, 0) && Object.is(b, -0)) {
    equals = true;
    return equals;
    console.log(equals);
  }
  return equals;
  console.log(equals);
}

strictEquals(0, -0);
