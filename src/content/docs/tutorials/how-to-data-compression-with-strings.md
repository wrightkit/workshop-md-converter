---
title: "How to Data Compression with Strings"
---

# Table Of Contents

<ol>
	<li><a href="#what-is-data-compression">What is data compression?</li>
	<li><a href="#when-to-use-this">When to use this?</li>
	<li><a href="#how-do-i-compress">How do i compress my vectors?</li>
	<li><a href="#Example">Example</li>
</ol>


# What is data compression?<span id="what-is-data-compression"></span>

While there are a number of techniques used for data compression, in this article we will be referring to it as compressing large sets of data with vectors and custom strings. Data compression is when larger sets of data are expressed in smaller forms for the computer to store and interpret later, in the case of workshop it will help save on element count.

# When to use this?<span id="when-to-use-this"></span>
Saving on element count due to arrays of data is typically for big gamemodes, with lots of custom strings and lots of vectors. This method of compression helps alleviate element count issues related to these things.


# How do I compress my data?<span id="how-do-i-compress"></span>

To compress your vectors and strings, you'll need 3 rules. one to initialize the data and then call your function, 2nd, to decompress, and 3rd to parse each part of the string.

# Example<span id="example"></span>

```
variables
{
 global:
  0: Data
  1: Decrypt_Iter
  2: Decrypt_StrNums
  3: Parse_Str
  4: Parse_Iter
  5: Parse_Num
}
subroutines
{
 0: Decrypt
 1: ParseNumber
}
rule("Main()")
{
 event
 {
  Ongoing - Global;
 }
 actions
 {
  "Example:"
  Global.Data = Custom String("v0.1,-1,1.5;sHelloWorld;n3.141;c13");
  "Type Delimiter ';'\nTypes:\nc - Color (Int)\nn - Number\ns - String\nv - Vector (Component Delimiter ',')"
  Call Subroutine(Decrypt);
 }
}
rule("Decrypt(String& Data)")
{
 event
 {
  Subroutine;
  Decrypt;
 }
 actions
 {
  Global.Data = String Split(Global.Data, Custom String(";"));
  Global.Decrypt_StrNums = Custom String("0123456789");
  For Global Variable(Decrypt_Iter, False, Count Of(Global.Data), True);
   Global.Parse_Str = String Slice(Global.Data[Global.Decrypt_Iter], True, 999999995904.000);
   Skip(Array(Null, 3, 5, 8)[Index Of String Char(Custom String("csnv"), Char In String(Global.Data[Global.Decrypt_Iter], False))]);
   "Case: Color"
   Call Subroutine(ParseNumber);
   Global.Data[Global.Decrypt_Iter] = Array(Color(White), Color(Yellow), Color(Green), Color(Purple), Color(Red),
     Color(Blue), Color(Aqua), Color(Orange), Color(Sky Blue), Color(Turquoise),
     Color(Lime Green), Color(Gray), Color(Violet), Color(Rose), Color(Black))[Global.Parse_Num];
  Else;
   "Case: String"
   Global.Data[Global.Decrypt_Iter] = Global.Parse_Str;
  Else;
   "Case: Number"
   Call Subroutine(ParseNumber);
   Global.Data[Global.Decrypt_Iter] = Global.Parse_Num;
  Else;
   "Case: Vector"
   Global.Data[Global.Decrypt_Iter] = String Split(Global.Parse_Str, Custom String(","));
   Global.Parse_Str = First Of(Global.Data[Global.Decrypt_Iter]);
   "Left"
   Call Subroutine(ParseNumber);
   Global.Parse_Str = Global.Data[Global.Decrypt_Iter][True];
   Global.Data[Global.Decrypt_Iter] = Array(Global.Parse_Num * Left, Last Of(Global.Data[Global.Decrypt_Iter]));
   "Up"
   Call Subroutine(ParseNumber);
   Global.Parse_Str = Last Of(Global.Data[Global.Decrypt_Iter]);
   Global.Data[Global.Decrypt_Iter] = First Of(Global.Data[Global.Decrypt_Iter]) + Global.Parse_Num * Up;
   "Forward"
   Call Subroutine(ParseNumber);
   Global.Data[Global.Decrypt_Iter] += Global.Parse_Num * Forward;
  End;
  Wait(False, Ignore Condition);
  End;
 }
}
rule("ParseNumber(String Parse_Str) Float Parse_Num")
{
 event
 {
  Subroutine;
  ParseNumber;
 }
 actions
 {
  Global.Parse_Num = Null;
  For Global Variable(Parse_Iter, False, String Length(Global.Parse_Str), True);
   If(String Contains(Global.Decrypt_StrNums, Char In String(Global.Parse_Str, Global.Parse_Iter)));
    Global.Parse_Num *= 10;
    Global.Parse_Num += Index Of String Char(Global.Decrypt_StrNums, Char In String(Global.Parse_Str, Global.Parse_Iter));
   End;
  End;
  "Negative Sign"
  Global.Parse_Num *= True - 2 * String Contains(Global.Parse_Str, Custom String("-"));
  "Shift Decimal"
  Global.Parse_Num /= 10 ^ String Length(Array Slice(String Split(Global.Parse_Str, Custom String(".")), True, True));
 }
}
```
