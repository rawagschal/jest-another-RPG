const Potion = require('../lib/Potion.js');

//write a test to ensure the Potion object has both a name and value
test('creates a health potion object', () => {
    //use 'new' keyword to create an object rather than a variable,
    //as it will store multiple values
    const potion = new Potion('health');

    //take the string passed in and assign to potion name
    expect(potion.name).toBe('health');
                            //expect.any() takes a constructor as an argument
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});
