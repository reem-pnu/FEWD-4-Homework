##Selector identification

Identify the selectors in each style and what HTML element(s) they target.
Also, which of these examples have errors? What are they?

###1
```
p {
  color: white;
}
```
Selectors: p
HTML element target: the text color will be white
Errors: no error


###2
```
span {
  padding: 15px;
}
```
Selectors: span
HTML element target: the space around an element's content
Errors: no error

###3
```
table td {
  color: #222;
}
```
Selectors: table td wich is the cell in the table
HTML element target: the text color will be white 
Errors: no erros

###4
```
.lede-section #left-side {
  position: absolute;
}
```
Selectors: lede-section #left-side 
HTML element target: any element with calss name lede-section and id name left-side 
Errors: no

###5
```
#section-9 {
  display: block
  text-decoration: underline;
  font-weight: bold;
}
```
Selectors: #section-9
HTML element target: the element with id section-9 will make  the text underline and bold
Errors: forget the simecoln in the first proprty


##What's different about the following three selectors?

###6
```
.fewd25-page-section .another-class {
  text-align: center;
}
```
Selectors: .fewd25-page-section .another-class
HTML element target: any element with class name .fewd25-page-section and.another-class will make the text align center
Errors: we have to put , between the class name in the selecter

###7
```
.fewd25-page-section, .another-class {
  text-align: center;
}
```
Selectors: .fewd25-page-section, .another-class
HTML element target: any element with class name .fewd25-page-section and.another-class will make the text align center
Errors: no error

###8
```
.fewd25-page-section.another-class {
  text-align: center;
}
```
Selectors:  .fewd25-page-section.another-class 
HTML element target: class name "fewd25-page-section another-class "
Errors: no error

the difference between the 6,7 and 8
for 6 we have to put , between the class name in the selector to override.
7 if we have an HTML element with class 1 and another  HTML element with class 2 will override the class it will apply the property for class 1 and class 2
8 will apply if we have the class name "class1 class2" that's what we call Double Class Selector 
