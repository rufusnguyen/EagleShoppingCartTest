using ShoppingCart.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace ShoppingCart.Controllers
{
    public class BookingController : ApiController
    {
        [HttpGet]
        public List<PopulateEmployeesByPackageResponse> PopulateEmployeesByPackage()
        {
            return null;
        }

        [HttpGet]
        public List<GetServiceCategorySelectTreeResponse> GetServiceCategorySelectTree()
        {
            return null;
        }

        [HttpGet]
        public List<PopulatePackagesByCategoryResponse> PopulatePackagesByCategory()
        {
            return null;
        }
    }
}
