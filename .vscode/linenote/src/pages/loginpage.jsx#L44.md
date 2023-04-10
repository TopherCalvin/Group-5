implementing json-server on login page:

1. axios adalah lib yg membantu mengirim req ke API
2. login func diubah ke async karena axios perlu waktu untuk menyelesaikan req
3. axios.get untuk mengambil data dari db (specify, db address, and what key to look for)
4. karena async-await, maka sebenarnya adalah promise. therefore, specify .then logic dengan param "res".
5. axios.get returs array of data, kalo user dan pass match, maka axios.get akan return array dgn length 1, isinya full credentials, kalau tidak ada lengthnya 0
6. dari situation itu, kita bisa buat conditional. jika true, maka logic dispatch dijalankan untuk send data ke userReducer
7. also, kita bisa set to local storage
