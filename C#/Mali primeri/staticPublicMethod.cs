using System;

namespace MyApplication
{
  class PublicStatic
  {

    public void publicMethod()    // method
    {
      Console.WriteLine("Za public method moram napraviti instancu klase");
    }
    
    static void staticMethod()    // method
    {
      Console.WriteLine("Za static method mi ne treba instanca klase");
    }

    static void Main(string[] args)
    {

      PublicStatic myObj = new PublicStatic();
      myObj.publicMethod();  // Call the method
      
      staticMethod();
      Console.ReadKey();
    }
  }
}