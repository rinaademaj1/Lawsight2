using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Lawsight2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
          
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult VHLex() {
         
            return View();

        }
        public ActionResult Language(string language)
        {
            if (language == "EN")
            {
                Session["EN"] = true;
            }
            else
            {
                Session["EN"] = null;
            }

            return Redirect(Request.UrlReferrer.ToString());
        }
    }
}