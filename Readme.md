# Task1
Чтобы запустить программу

node index.js -c "{XY(-)}n" -i "{input file path}" -o "{output fi;e path"

где XY

X is a cipher mark:

C is for Caesar cipher (with shift 1)

A is for Atbash cipher

R is for ROT-8 cipher

Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)

1 is for encoding

0 is for decoding

при отсутствии input file или outout file приложение будет работать через командную строку. чтобы выйти из режима нажмите Cntr+c.

Пример $ node index.js -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"

К сожалению перепутал ветки , поэтому в PR нет измененных файлов=(

input.txt This is secret. Message about "" symbol!

output.txt Myxn xn nbdobm. Tbnnfzb ferlm "" nhteru!
