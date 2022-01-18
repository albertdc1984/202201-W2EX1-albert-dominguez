function strictEquals(a, b) {
  let equals = Object.is(a, b);
  return equals;
  console.log(equals);
}

describe("Given a strictEquals function", () => {
  describe("When it receives the values 1 and 1", () => {
    test("Then it should return true", () => {
      // Arrange

      const expectedResult = true;

      // Act
      const equalsCheck = strictEquals(1, 1);

      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });

  describe("When it receives the values Nan and Nan", () => {
    test("Then it should return false", () => {
      // Arrange
      const expectedResult = false;

      // Act
      const equalsCheck = strictEquals(NaN, NaN);

      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });

  describe("When it receives the values 0 and -0", () => {
    test("Then it should return true", () => {
      // Arrange

      const expectedResult = true;

      // Act
      const equalsCheck = strictEquals(0, -0);

      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });

  describe("When it receives the values -0 and 0", () => {
    test("Then it should return true", () => {
      // Arrange

      const expectedResult = true;

      // Act
      const equalsCheck = strictEquals(-0, 0);

      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });

  describe("When it receives the values 1 and '1'", () => {
    test("Then it should return true", () => {
      // Arrange

      const expectedResult = false;

      // Act
      const equalsCheck = strictEquals(1, "1");

      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });
  describe("When it receives the values true and false", () => {
    test("Then it should return false", () => {
      // Arrange

      const expectedResult = false;

      // Act
      const equalsCheck = strictEquals(true, false);

      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });
  describe("When it receives the values false and false", () => {
    test("Then it should return true", () => {
      // Arrange

      const expectedResult = true;

      // Act
      const equalsCheck = strictEquals(false, false);

      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });
  describe("When it receives the values 'Water' and 'Oil'", () => {
    test("Then it should return false", () => {
      // Arrange

      const expectedResult = false;

      // Act
      const equalsCheck = strictEquals("Water", "Oil");

      // Assert
      expect(equalsCheck).toBe(expectedResult);
    });
  });
});
