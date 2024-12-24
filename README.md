# String Calculator - TDD Kata

This project is a simple implementation of the **String Calculator Kata** using **Test-Driven Development (TDD)** in **TypeScript**. The calculator can handle comma-separated numbers, newlines as delimiters, custom delimiters, and more, while ensuring the code is robust and well-tested.

## Steps to Set Up and Run the Project

### 1. **Clone the Repository**

Clone the repository to your local machine:

```bash
git clone https://github.com/pneha2296/string-calculator.git
cd string-calculator
```

### 2. **Install Dependencies**

Make sure you have **Node.js** and **npm** installed. Then, run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. **Run Tests**

Once the dependencies are installed, you can run the test cases using Jest. This will ensure the functionality of your **String Calculator**.

Run the tests using:

```bash
npm test
```

Jest will automatically find all the test files (with the `.test.ts` extension) and execute them. If everything is working as expected, you should see an output similar to the following:

```bash
 PASS  tests/calculator.test.ts
  String Calculator - add
    ✓ should return 0 for an empty string
    ✓ should return the number itself for a single number
    ✓ should return the sum of two numbers separated by a comma
    ✓ should return the sum of multiple numbers separated by commas
    ✓ should handle new lines as delimiters in addition to commas (1 ms)
    ✓ should handle custom single-character delimiters
    ✓ should handle custom multi-character delimiters
    ✓ should throw an exception for negative numbers (3 ms)
    ✓ should ignore non-numeric values in the input
    ✓ should ignore numbers greater than 1000

```

### 4. **Test the Functionality**

If you want to test the calculator functionality in isolation, you can create an `index.ts` file to run the function with specific inputs.

1. **Create an `index.ts` file in the `src` folder**:

   ```typescript
   // src/index.ts
   import { add } from './calculator';

   const result = add("1,2,3\n4,5");
   console.log("Result:", result); // Should print: Result: 15
   ```

2. **Compile TypeScript**:

   Compile the TypeScript code to JavaScript by running:

   ```bash
   npx tsc
   ```

   This will generate JavaScript files in the `dist` folder.

3. **Run the Program**:

   After compiling, you can run the program using:

   ```bash
   node dist/index.js
   ```

   This will execute the code and output the result, which in this case would be `15`.

### 5. **How to Add More Test Cases**

To add more test cases or features, follow these steps:

1. **Write the test cases** in the `tests/calculator.test.ts` file, using the format provided for the existing test cases.
2. **Run the tests** using `npm test` to make sure your code works as expected.

### 6. **Project Structure**

Here’s a quick overview of the project structure:

```
string-calculator/
│
├── src/
│   ├── calculator.ts  # Calculator function
│   └── index.ts      # Entry point for testing the functionality
│
├── tests/
│   └── calculator.test.ts  # Jest test cases for the calculator
│
├── tsconfig.json  # TypeScript configuration file
├── jest.config.js  # Jest configuration file
├── package.json  # Project dependencies and scripts
└── README.md     # This file
```

---

## Conclusion

With this setup, you can now run the **String Calculator** and test it through **Jest** using **TypeScript**. Feel free to expand the functionality by adding more test cases or supporting additional features like custom delimiters or input validation.

Let me know if you have any questions or issues!