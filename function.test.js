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

describe("Given a strictEquals function", () => {
  describe("When it receives the values 1 and 1", () => {
    test("Then it should return true", () => {
      // Arrange

      const expectedResult = true;
      const magic1 = 1;
      const magic2 = 1;

      // Act
      const equalsCheck = strictEquals(magic1, magic2);

      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });

  describe("When it receives the values Nan and Nan", () => {
    test("Then it should return false", () => {
      // Arrange
      const expectedResult = false;
      const magic1 = NaN;
      const magic2 = NaN;

      // Act
      const equalsCheck = strictEquals(magic1, magic2);

      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });

  describe("When it receives the values 0 and -0", () => {
    test("Then it should return true", () => {
      // Arrange

      const expectedResult = true;
      const magic1 = 0;
      const magic2 = -0;

      // Act
      const equalsCheck = strictEquals(magic1, magic2);

      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });

  describe("When it receives the values -0 and 0", () => {
    test("Then it should return true", () => {
      // Arrange

      const expectedResult = true;
      const magic1 = -0;
      const magic2 = 0;

      // Act
      const equalsCheck = strictEquals(magic1, magic2);

      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });

  describe("When it receives the values 1 and '1'", () => {
    test("Then it should return true", () => {
      // Arrange

      const expectedResult = false;
      const magic1 = 1;
      const magic2 = "1";

      // Act
      const equalsCheck = strictEquals(magic1, magic2);
      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });
  describe("When it receives the values true and false", () => {
    test("Then it should return false", () => {
      // Arrange

      const expectedResult = false;
      const magic1 = true;
      const magic2 = false;

      // Act
      const equalsCheck = strictEquals(magic1, magic2);

      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });
  describe("When it receives the values false and false", () => {
    test("Then it should return true", () => {
      // Arrange

      const expectedResult = true;
      const magic1 = false;
      const magic2 = false;

      // Act
      const equalsCheck = strictEquals(magic1, magic2);
      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });
  describe("When it receives the values 'Water' and 'Oil'", () => {
    test("Then it should return false", () => {
      // Arrange

      const expectedResult = false;
      const magic1 = "Water";
      const magic2 = "Oil";

      // Act
      const equalsCheck = strictEquals(magic1, magic2);
      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });
});
