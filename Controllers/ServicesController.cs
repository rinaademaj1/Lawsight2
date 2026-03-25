using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Web;
using System.Web.Mvc;

namespace Lawsight2.Controllers
{
    public class ServicesController:Controller
    {
        public ActionResult LegalResarch()
        {
            return View();
        }
        public ActionResult FeasibilityStudies()
        {
            return View();
        }
        public ActionResult MarketResearch() {
            return View();

        }
        public ActionResult NegotiationReview() { 
            return View();
        }
        public ActionResult ConsultingRepresentation() {
            return View();
        }
        public ActionResult ConsultingDraft()
        {
            return View();
        }
        public ActionResult ManagerialConsulting() { 
            return View();
        }
        public ActionResult LegalAnalysis() {
            return View();
        }
        public ActionResult ComercialLitigation()
        {
            return View();
        }
        public ActionResult EnergieSector()
        {
            return View();
        }
        public ActionResult Proceeding()
        {
            return View();
        }
        public ActionResult CrossBorder()
        {
            return View();
        }
        public ActionResult LiabilityClaims()
        {
            return View();
        }
    }


    }