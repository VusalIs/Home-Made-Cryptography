# Home Brew Cryptography

I have created this encryption method for fun.
Github Link:
https://github.com/VusalIs/home_brew_cryptography
Brief Description:
This cryptography is the improved version of the cryptography which we have learnt during
the class. When this algorithm encrypt and decrypt the plain text to emojis which have been
defined by the programmer. For that, 2 things are required private key and private table.
Explanation of algorithm:
User who wants to encrypt and decrypt a plain text has to generate a private table. This
private table will contain arrays of random value which will be between 1 and a length of
private key and all arrays in the private table is shuffled before pushing to the private table. I
have used custom shuffling technique because as Mr. Miragshin said during the class
random values are not random in computers. Because of that I first shuffle first 2 elements
and after that first 3 elements till the length of the array which is 26 in my case.
After generating the private table, you can add plain text, private key and private table to the
interface. The program will take corresponded letters and find summation of them, and find
proper emoji from private table and write it in a string. Decryption process is reverse of this
algorithm.
