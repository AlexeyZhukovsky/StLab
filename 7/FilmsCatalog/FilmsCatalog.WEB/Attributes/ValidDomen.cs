using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FilmsCatalog.WEB.Attributes
{
    public class ValidDomenAttribute : ValidationAttribute
    {
        private static string domain;

        public ValidDomenAttribute(string Domain)
        {
            domain = Domain;
        }

        public override bool IsValid(object value)
        {
            if (value != null)
            {
                string strval = value.ToString();
                string result = strval.Substring(strval.IndexOf('@'));

                if (result == domain)
                {
                    return true;
                }
            }
            return false;
        }
    }
}