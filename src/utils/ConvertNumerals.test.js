const ConverNumerals = require('./ConvertNumerals');

test('convert to roman numerals', () => {
    expect(ConverNumerals(1)).toBe("I")
    expect(ConverNumerals(2)).toBe("II")
    expect(ConverNumerals(3)).toBe("III")
    expect(ConverNumerals(4)).toBe("IV")
    expect(ConverNumerals(5)).toBe("V")
    expect(ConverNumerals(6)).toBe("VI")
    expect(ConverNumerals(7)).toBe("VII")
    expect(ConverNumerals(8)).toBe("VIII")
    expect(ConverNumerals(9)).toBe("IX")
    expect(ConverNumerals(10)).toBe("X")
    expect(ConverNumerals(15)).toBe("XV")
    expect(ConverNumerals(16)).toBe("XVI")
    expect(ConverNumerals(20)).toBe("XX")
    expect(ConverNumerals(49)).toBe("XLIX")
    expect(ConverNumerals(50)).toBe("L")
    expect(ConverNumerals(95)).toBe("XCV")
    expect(ConverNumerals(150)).toBe("CL")
    expect(ConverNumerals(249)).toBe("CCXLIX")
    expect(ConverNumerals(255)).toBe("CCLV")
    expect(ConverNumerals(444)).toBe("CDXLIV")
    expect(ConverNumerals(669)).toBe("DCLXIX") 
    expect(ConverNumerals(995)).toBe("CMXCV")
    expect(ConverNumerals(1255)).toBe("MCCLV")
    expect(ConverNumerals(3999)).toBe("MMMCMXCIX")
    expect(() => {
        ConverNumerals(4000)
    }).toThrowError('maximum number is 3999');
  });
  