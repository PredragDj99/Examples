using System;
using System.Diagnostics;

namespace MyApplication
{
  class PublicStatic
  {

    static void Main(string[] args)
    {
      //Start something

      //Folder
      System.Diagnostics.Process.Start("C:\\Users\\Pedja\\Desktop\\Examples\\C#\\Mali primeri");

      //Browser URL
      System.Diagnostics.Process.Start("http://www.google.com");
      
      //VS opens .cs
      Process.Start("C:\\Users\\Pedja\\Desktop\\Examples\\C#\\Mali primeri\\staticPublicMethod.cs");
      
      //Notepad opens .cs
      System.Diagnostics.Process.Start("notepad.exe", @"C:\\Users\\Pedja\\Desktop\\Examples\\C#\\Mali primeri\\staticPublicMethod.cs");      



      Console.ReadKey();
    }
  }
}