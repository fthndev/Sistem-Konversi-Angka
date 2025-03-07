$(document).ready(function(){
    $("#submitdesimal").click(function(e){
        e.preventDefault();
        let angka_desimal =parseInt($("#angkadesimal").val());

        if (angka_desimal === 0){
            $("#des-to-biner").val(0);
            $("#des-to-oktal").val(0);
            $("#des-to-hexa").val(0);
        }
        else{
            // konversi desimal ke biner
            let simpan_desimal_to_biner = angka_desimal;
            let array_des_bin =[];
            let simpan_string_biner = ""; 
            while (simpan_desimal_to_biner > 0){
                let modulus = simpan_desimal_to_biner % 2
                array_des_bin.push(String(modulus)) 
                simpan_desimal_to_biner = parseInt(simpan_desimal_to_biner / 2);
            }

            for (i = array_des_bin.length-1; i >= 0; i--){
                simpan_string_biner+= array_des_bin[i]
            }
            $("#des-to-biner").val(simpan_string_biner);

            // konversi desimal ke oktal
            let angka_desimal_to_oktal = angka_desimal;
            let array_des_oktal = [];
            let simpan_string_oktal = "";

            while (angka_desimal_to_oktal > 0){
                let hasil_modulus_oktal = angka_desimal_to_oktal % 8
                array_des_oktal.push(String(hasil_modulus_oktal))
                angka_desimal_to_oktal = parseInt(angka_desimal_to_oktal / 8)
            }

            for (let j = array_des_oktal.length-1 ; j >= 0 ; j--){
                simpan_string_oktal+= array_des_oktal[j]
            }

            $("#des-to-oktal").val(simpan_string_oktal)

            // konversi desimal ke hexa
            let angka_desimal_to_hexa = angka_desimal;
            let library_hexa = {
                0 : "0", 1 : "1", 2 : "2", 3 : "3", 4 : "4", 5 : "5", 6 : "6", 7 : "7", 8 : "8", 9 : "9", 
                10 : "A", 11 : "B", 12 : "C", 13 : "D", 14 : "E", 15 : "F"
            }
            let array_des_hexa=[];
            let simpan_string_hexa = "";
            while (angka_desimal_to_hexa > 0){
                let hasil_modulus_hexa = angka_desimal_to_hexa % 16;
                array_des_hexa.push(String(library_hexa[hasil_modulus_hexa])) 
                angka_desimal_to_hexa = parseInt(angka_desimal_to_hexa / 16)
            }

            for (let k = array_des_hexa.length -1; k >= 0; k--){
                simpan_string_hexa+= array_des_hexa[k]
            }
            $("#des-to-hexa").val(simpan_string_hexa)
        }
    
    })

    $("#resetdesimal").click(function(){
        $("#angkadesimal").val("")
        $("#des-to-biner").val("")
        $("#des-to-oktal").val("")
        $("#des-to-hexa").val("")

    })

    $("#submitbiner").click(function(event){
        event.preventDefault()
        let angka_biner = String($("#angkabiner").val());
        
        if (!/^[0-1]+$/.test(angka_biner)){
            alert("Input tidak valid!\nInput biner terdiri dari angka 1 atau 0!")
        }
        else if (angka_biner === "0" || angka_biner === "00" || angka_biner === "000" || angka_biner === "0000"){
            $("#biner-to-des").val(0)
            $("#biner-to-oktal").val(0)
            $("#biner-to-hexa").val(0)
        }
        else{
            // konversi biner ke desimal
            let array_bin_des =[]
            let pangkat = 0
            let temp = 0
            for (let i = angka_biner.length -1; i >= 0; i--){
                array_bin_des.push(parseInt(angka_biner[i]) * 2 ** pangkat) 
                pangkat++
            }
            for (let j = 0 ; j < array_bin_des.length ; j++){
                temp+=array_bin_des[j]
            }
            $("#biner-to-des").val(temp)

            // konversi biner ke oktal
            let simpan_bin_oktal = angka_biner;
            let array_bin_oktal = [];
            let pangkat_2 = 0
            let temp_2 = 0 
            for (let a = simpan_bin_oktal.length -1; a >= 0; a--){
                array_bin_oktal.push(parseInt(simpan_bin_oktal[a]) * 2 ** pangkat_2)
                pangkat_2++
            }
            for (b = 0; b < array_bin_oktal.length; b++){
                temp_2+= array_bin_oktal[b]
            }
            let simpanstr_biner_oktal = "";
            while (temp_2 > 0){
                let hasil_modulus_des = temp_2 % 8;
                simpanstr_biner_oktal = String(hasil_modulus_des) + simpanstr_biner_oktal;
                temp_2 = parseInt(temp_2 / 8)
            }
            $("#biner-to-oktal").val(simpanstr_biner_oktal)

            // konversi biner ke hexa
            let library_hexa = {
                0 : "0", 1 : "1", 2 : "2", 3 : "3", 4 : "4", 5 : "5", 6 : "6", 7 : "7", 8 : "8", 9 : "9", 
                10 : "A", 11 : "B", 12 : "C", 13 : "D", 14 : "E", 15 : "F"
            }
            let simpan_bin_hexa = angka_biner;
            let array_bin_hexa = [];
            let pangkat_3 = 0
            let temp_3 = 0 
            for (let c = simpan_bin_oktal.length -1; c >= 0; c--){
                array_bin_hexa.push(parseInt(simpan_bin_hexa[c]) * 2 ** pangkat_3)
                pangkat_3++
            }
            for (d = 0; d < array_bin_oktal.length; d++){
                temp_3+= array_bin_oktal[d]
            }

            let simpanstr_biner_hexa = "";
            while (temp_3 > 0){
                let hasil_mod_des_hexa = temp_3 % 16;
                simpanstr_biner_hexa = String(library_hexa[hasil_mod_des_hexa]) + simpanstr_biner_hexa;
                temp_3 = parseInt(temp_3 / 16);
            }
            $("#biner-to-hexa").val(simpanstr_biner_hexa);
        }
    })

    $("#resetbiner").click(function(){
        $("#angkabiner").val("")
        $("#biner-to-des").val("")
        $("#biner-to-oktal").val("")
        $("#biner-to-hexa").val("")
    })

    $("#submitoktal").click(function(event){
        event.preventDefault();
        let angka_oktal = String($("#angkaoktal").val());

        if (!/^[0-7]+$/.test(angka_oktal)){
            alert("Input oktal terdiri dari angka 0-7!")
        }
        else if (angka_oktal === "0"){
            $("#oktal-to-des").val(0)
            $("#oktal-to-biner").val(0)
            $("#oktal-to-hexa").val(0)
        }
        else{
            // konversi oktal ke desimal
            let simpan_oktal_des = angka_oktal;
            let array_oktal_des = [];
            let hasil_oktal=0
            let pangkat=0
            for (let i = simpan_oktal_des.length-1; i>=0; i--){
                array_oktal_des.push(parseInt(simpan_oktal_des[i]) * 8 ** pangkat) 
                pangkat++
            }
            for (let j = 0; j < array_oktal_des.length; j++){
                hasil_oktal+=array_oktal_des[j]
            }
            $("#oktal-to-des").val(hasil_oktal)

            // konversi oktal ke biner
            let angka_oktal_2 = angka_oktal;
            let array_oktal_bin=[];
            let pangkat_2 = 0;
            let hasil_oktal_2 = 0;
            for (let a = angka_oktal_2.length-1; a >= 0; a--){
                array_oktal_bin.push(parseInt(angka_oktal_2[a]) * 8 ** pangkat_2) 
                pangkat_2++
            }

            for (let b = 0; b < array_oktal_bin.length; b++){
                hasil_oktal_2+=array_oktal_bin[b]
            }

            let simpanStr_oktal_bin = "";
            while (hasil_oktal_2 > 0){
                let hasilMod_oktal_bin = hasil_oktal_2 % 2;
                simpanStr_oktal_bin = String(hasilMod_oktal_bin) + simpanStr_oktal_bin;
                hasil_oktal_2 = parseInt(hasil_oktal_2 / 2)
            }
            $("#oktal-to-biner").val(simpanStr_oktal_bin)


            // konversi oktal ke hexa
            let library_hexa = {
                0 : "0", 1 : "1", 2 : "2", 3 : "3", 4 : "4", 5 : "5", 6 : "6", 7 : "7", 8 : "8", 9 : "9", 
                10 : "A", 11 : "B", 12 : "C", 13 : "D", 14 : "E", 15 : "F"
            }

            let angka_oktal_3 = angka_oktal;
            let array_oktal_hexa=[];
            let pangkat_3 = 0;
            let hasil_oktal_3 = 0;
            for (let c = angka_oktal_3.length-1; c >= 0; c--){
                array_oktal_hexa.push(parseInt(angka_oktal_3[c]) * 8 ** pangkat_3) 
                pangkat_3++
            }

            for (let d = 0; d < array_oktal_hexa.length; d++){
                hasil_oktal_3+=array_oktal_hexa[d]
            }

            let simpanStr_oktal_hexa = "";
            while (hasil_oktal_3 > 0){
                let hasilMod_oktal_hexa = hasil_oktal_3 % 16;
                simpanStr_oktal_hexa = String(library_hexa[hasilMod_oktal_hexa]) + simpanStr_oktal_hexa;
                hasil_oktal_3 = parseInt(hasil_oktal_3 / 16)
            }
            $("#oktal-to-hexa").val(simpanStr_oktal_hexa)
        }
    })

    $("#resetoktal").click(function(){
        $("#angkaoktal").val("")
        $("#oktal-to-des").val("")
        $("#oktal-to-biner").val("")
        $("#oktal-to-hexa").val("")

    })

   $("#submithexa").click(function(event){
    event.preventDefault();
    let angka_hexa = String($("#angkahexa").val());

    if (!/^[0-9A-F]+$/.test(angka_hexa)){
        alert("Input Tidak Valid!\nInput berupa:\nKarakter kapital, bukan simbol, atau tidak berisi spasi.")
    }

    else if (angka_hexa === "0"){
        $("#hexa-to-des").val(0)
        $("#hexa-to-biner").val(0)
        $("#hexa-to-oktal").val(0)
    }

    else{
        // konversi hexa ke desimal
        hexa_des = angka_hexa;
        array_hexa_des = []
        let library_hexa = {
            "0" : 0, "1" : 1, "2" : 2, "3" : 3, "4" : 4, "5" : 5, "6" : 6, "7" : 7, "8" : 8, "9" : 9, 
            "A" : 10, "B" : 11, "C" : 12, "D" : 13, "E" : 14, "F" : 15
        }
        let pangkat_1 = 0
        let hasil_hexa_des=0
        for (let i = hexa_des.length -1 ; i >= 0; i--){
            array_hexa_des.push(library_hexa[hexa_des[i]] * 16 ** pangkat_1)
            pangkat_1++
        }
        for (let j = 0; j < array_hexa_des.length; j++){
            hasil_hexa_des+= array_hexa_des[j]
        }
        $("#hexa-to-des").val(hasil_hexa_des)

        // konversi hexa ke biner
        array_hexa_des_2 = []
        hexa_bin = angka_hexa;
        let library_hexa_2 = {
            "0" : 0, "1" : 1, "2" : 2, "3" : 3, "4" : 4, "5" : 5, "6" : 6, "7" : 7, "8" : 8, "9" : 9, 
            "A" : 10, "B" : 11, "C" : 12, "D" : 13, "E" : 14, "F" : 15
        }
        let pangkat_2 = 0
        let hasil_hexa_des_2 = 0
        for (let a = hexa_bin.length -1 ; a >= 0; a--){
            array_hexa_des_2.push(library_hexa_2[hexa_bin[a]] * 16 ** pangkat_2)
            pangkat_2++
        }
        for (let b = 0 ; b < array_hexa_des_2.length; b++){
            hasil_hexa_des_2+=array_hexa_des_2[b]
        }
        simpanStr_hexa_bin= "";
        while (hasil_hexa_des_2 > 0){
            let hasilMod_hexa_bin = hasil_hexa_des_2 % 2;
            simpanStr_hexa_bin = String(hasilMod_hexa_bin) + simpanStr_hexa_bin;
            hasil_hexa_des_2 = parseInt(hasil_hexa_des_2 / 2)
        }
        $("#hexa-to-biner").val(simpanStr_hexa_bin)

        // konversi hexa ke oktal
        array_hexa_des_3 = []
        hexa_oktal = angka_hexa;
        let library_hexa_3 = {
            "0" : 0, "1" : 1, "2" : 2, "3" : 3, "4" : 4, "5" : 5, "6" : 6, "7" : 7, "8" : 8, "9" : 9, 
            "A" : 10, "B" : 11, "C" : 12, "D" : 13, "E" : 14, "F" : 15
        }
        let pangkat_3 = 0
        let hasil_hexa_des_3 = 0
        for (let c = hexa_oktal.length -1 ; c >= 0; c--){
            array_hexa_des_3.push(library_hexa_3[hexa_oktal[c]] * 16 ** pangkat_3)
            pangkat_3++
        }
        for (let d = 0 ; d < array_hexa_des_3.length; d++){
            hasil_hexa_des_3+=array_hexa_des_3[d]
        }
        simpanStr_hexa_oktal= "";
        while (hasil_hexa_des_3 > 0){
            let hasilMod_hexa_oktal = hasil_hexa_des_3 % 8;
            simpanStr_hexa_oktal = String(hasilMod_hexa_oktal) + simpanStr_hexa_oktal;
            hasil_hexa_des_3 = parseInt(hasil_hexa_des_3 / 8)
        }
        $("#hexa-to-oktal").val(simpanStr_hexa_oktal)
    }
   }) 

   $("#resethexa").click(function(){
    $("#angkahexa").val("")
    $("#hexa-to-des").val("")
    $("#hexa-to-biner").val("")
    $("#hexa-to-oktal").val("")
   })
   
   $("#angkadesimal").focus(function(){
    $(this).css("background-color", "#FCDC94")
   })
   $("#angkadesimal").blur(function(){
    $(this).css("background-color", "white")
   })
   $("#angkabiner").focus(function(){
    $(this).css("background-color", "#FCDC94")
   })
   $("#angkabiner").blur(function(){
    $(this).css("background-color", "white")
   })
   $("#angkaoktal").focus(function(){
    $(this).css("background-color", "#FCDC94")
   })
   $("#angkaoktal").blur(function(){
    $(this).css("background-color", "white")
   })
   $("#angkahexa").focus(function(){
    $(this).css("background-color", "#FCDC94")
   })
   $("#angkahexa").blur(function(){
    $(this).css("background-color", "white")
   })
})