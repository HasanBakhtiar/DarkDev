// All Data Type 
// --------------------------------------------------------------------------------------------------
// Primitive (Bəsit)  Data(Data) Type(Tipi) Start
var infomationText1   = "Salam1";     //String(mətn)      data type ("Hi")
var infomationText2   = 'Salam2';     //String(mətn)      data type ("Hi")
var infomationNumb    = 5 ;           //Number(rəqəm)     data type (5)
var infomationBoolean = true ;        //Boolean(məntiqi)  data type (true/flase)

document.write(infomationText1     + "<br>");
document.write(infomationText2     + "<br>");
document.write(infomationNumb      + "10" + "<br>");
document.write(infomationBoolean   + "<br>");
// Basic(Bəsit)        Data(Data) Type(Tipi) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Composite(Birləşik) Data(Data) Type(Tipi) Start
var infomationArray  =  ['pc',5,true,'table'];    //Array
var infomationObject =  {
    name:"Samsung",
    ROM: "OneUI"
};                                                //Object

document.write(infomationArray          + "<br>");
document.write(infomationObject.name    + "<br>");
document.write(infomationObject.ROM     + "<br>");
// Composite(Birləşik) Data(Data) Type(Tipi) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Special(Xüsusi)     Data(Data) Type(Tipi) Start
var informationUndefined = "";   //Undefined
var informationNULL      = null; //Null

document.write(informationUndefined          + "<br>");
document.write(informationNULL               + "<br>");
// Special(Xüsusi)     Data(Data) Type(Tipi) End
// --------------------------------------------------------------------------------------------------


// All Operators
// --------------------------------------------------------------------------------------------------
// Assignment Operators (Daxil Etmə operatorları) Start
// =
// +=
// -=
// *=
// /=
// %=
// **=

var infoDatA = 5;
var infoDatB = 10;
infoDatA += infoDatB;
document.write(infoDatA);
// Assignment Operators (Daxil Etmə operatorları) End
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Arithmetic Operators (Riyazi operatorlar) Start
// +    Toplama
// -    Çıxma
// *    Vurma
// /    Bölmə
// %    Qalıq
// **   Üstü
// ++   Bir artırma
// --   Bir əksiltmə
var infoNumbSt = 5; 
var infoNumbNd = 10; 
var infoNumbRd = 5;
    infoNumbRd++;
// infoNumbRd--;

document.write(infoNumbSt + infoNumbNd + "<br>");
document.write(infoNumbSt - infoNumbNd + "<br>");
document.write(infoNumbSt * infoNumbNd + "<br>");
document.write(infoNumbSt / infoNumbNd + "<br>");
document.write(infoNumbSt %  infoNumbNd + "<br>");
document.write(infoNumbSt ** infoNumbNd + "<br>");
document.write(infoNumbRd + "<br>");


// Arithmetic Operators (Riyazi operatorlar) End
// --------------------------------------------------------------------------------------------------












