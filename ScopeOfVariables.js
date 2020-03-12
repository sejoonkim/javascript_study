// block scope -> const, let
{
  const name = "Mark";
  console.log(name);
}

//console.log(name);

// from out to in
let age = 37;

{
  age++;
  console.log(age);
}
console.log(age);

// block in a block
{
    {
        {
            console.log(age);
        }
    }
}


// function scope -> var

var a = 0;

(function() {
    a++;
    console.log(a);
})()

(function() {
    var
})()

var c = 0;

{
    c++;
    console.log(c);
}

{
    var d = 0;
    console.log(d);
}

console.log(d);