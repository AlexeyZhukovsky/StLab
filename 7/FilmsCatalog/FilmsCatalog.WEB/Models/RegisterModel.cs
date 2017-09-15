using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using FilmsCatalog.WEB.Attributes;
using System.Linq;
using System.Web;

namespace FilmsCatalog.WEB.Models
{
    public class RegisterModel
    {
        [Required]
        [RegularExpression(@"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}", ErrorMessage = "invalid format")]
        [ValidDomen("@tut.by", ErrorMessage = "change tut.by")]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }

        [Required]
        public string Name { get; set; }
    }
}