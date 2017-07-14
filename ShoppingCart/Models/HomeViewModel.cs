using System.ComponentModel.DataAnnotations;

namespace ShoppingCart.Models
{
    public class HomeViewModel
    {
        [Required(AllowEmptyStrings = false, ErrorMessage = "Category Name must not be blank")]
        public string CategoryId { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Category Name must not be blank")]
        public int PackageId { get; set; }

        public string Description { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Category Name must not be blank")]
        public int EmployeeId { get; set; }
    }
}