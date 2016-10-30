describe("test", function() {
  var itemsWithoutCookies;
  var itemsWithCookies;

  beforeEach(function() {
    itemsWithoutCookies = ['apples', 'pears', 'bananas'];
    itemsWithCookies = ['bread', 'milk', 'Cookies'];
  });

  it("should be able to detect no cookies", function() {
    var result = test(itemsWithoutCookies);
    expect(result).not.toBe(true);
  });

  it("should be able to detect cookies", function() {
    var result = test(itemsWithCookies);
    expect(result).toBe(true);
  });
});

describe("First Name", function() {


    beforeEach(function () {
      module('common');
      inject(function ($injector) {
        myinfoService = $injector.get('MyInfoService');

      });
    });
  //Truthy
    var fn_test = "fo";
  it('first Name', function() {
      var r = myinfoService.checks.first_name(fn_test)
      expect(r).toEqual(false);
  });
  //Falsey
   var tfn_test = "fours";
   it('first Name', function() {
       var r = myinfoService.checks.first_name(tfn_test)
       expect(r).toEqual(true);
   });
});
describe("Last Name", function() {
    beforeEach(function () {
      module('common');
      inject(function ($injector) {
        myinfoService = $injector.get('MyInfoService');

      });
    });
      var ln_test = "";
      it('Last Name', function() {
          var r = myinfoService.checks.last_name(ln_test)

          expect(r).toEqual(false);
      });

      var fln_test = "aagoodsdsdsd";
      it('Last Name', function() {
          var r = myinfoService.checks.last_name(fln_test)
          expect(r).toEqual(true);
      });
  });
  describe("Email", function() {
      beforeEach(function () {
        module('common');
        inject(function ($injector) {
          myinfoService = $injector.get('MyInfoService');

        });
      });
        var em = "asas";
        it('false email', function() {
            var r = myinfoService.checks.email(em)
            console.log(r,'f em', em);
            expect(r).toEqual(false);
        });

        var emt = "hdl@email.com";
        it('true email', function() {
            var r = myinfoService.checks.email(emt)

            expect(r).toEqual(true);
        });
    });

    describe("Phone", function() {
        beforeEach(function () {
          module('common');
          inject(function ($injector) {
            myinfoService = $injector.get('MyInfoService');

          });
        });
          var tf = "90098-09";
          it('false phone', function() {
              var r = myinfoService.checks.phone(tf)
              expect(r).toEqual(false);
          });

          var tt = "222-999-0909";
          it('true phone', function() {
              var r = myinfoService.checks.phone(tt)
              expect(r).toEqual(true);
          });
      });

      describe("Validate All Function", function() {
          beforeEach(function () {
            module('common');
            inject(function ($injector) {
              myinfoService = $injector.get('MyInfoService');

            });
          });

            it('false all data', function() {
                myinfoService.myInfo = {
                    'first_name' : "",
                    'last_name' : "",
                    'email': "",
                    'favorite': "",
                    'phone' : "",
                    'completed' : true
                };
                myinfoService.validateInfo()
                expect(myinfoService.myInfo.completed).toEqual(false);
            });

            it('true all data', function() {
                myinfoService.myInfo = {
                    'first_name' : "jksd",
                    'last_name' : "lklklk",
                    'email': "jarvis@ail.com",
                    'favorite': "",
                    'phone' : "",
                    'completed' : false
                };
                myinfoService.validateInfo()
                expect(myinfoService.myInfo.completed).toEqual(true);
            });


        });

describe("Get Menu categories", function() {

  beforeEach(function () {

    module('common');


    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
      MenuService = $injector.get('MenuService');
    });



  });
  it('return the Menu Category if found', function() {
      //all possible short names
     var data = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'b1', 'b2'
     , 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13', 'b14', 'b15', 'b16'
     , 'sp1', 'sp2', 'sp3', 'sp4', 'sp5', 'sp6', 'sp7', 'sp8', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6'
     , 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17', 'c18', 'c19', 'f1'
     , 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'v1', 'v2', 'v3', 'v4'
     , 'v5', 'v6', 'v7', 'dk1', 'dk2', 'dk3', 'vg1', 'vg2', 'vg3', 'vg4', 'vg5', 'vg6', 'vg7', 'vg8'
     , 'vg9', 'vg10', 'vg11', 'vg12', 'vg13', 'vg14', 'cu21', 'cu22', 'cu23', 'nl1', 'nl2', 'nl3', 'nl4'
     , 'nl5', 'nf10', 'nf11', 'nf12', 'nf13', 'pf1', 'pf2', 'pf3', 'pf4', 'pf5', 'fr1', 'fr2', 'fr3'
     , 'fr4', 'fr5', 'cm1', 'cm2', 'cm3', 'cm4', 'cm5', 'fy1', 'fy2', 'fy3', 'fy4', 'fy5', 'so1', 'so2', 'so3'
     , 'so4', 'so5', 'so6', 'so7', 'ds1', 'ds2', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13', 'd14', 'd15', 'd16', 'd17', 'd18', 'sr1', 'sr2', 'sr3', 'sr4', 'sr5', 'sr6', 'sr7', 'sr8', 'sr9', 'sr10', 'sr11', 'sr12', 'sr13', 'sr14', 'sr15', 'sr16', 'sr17', 'sr18', 'sr19', 'sr20', 'sr21', 'sr22', 'sr23', 'sr24', 'sr25', 'sr26', 'sr27', 'sr28', 'sr29', 'sr30', 'sr31', 'sr32', 'sr33', 'sr34', 'sr35', 'sr36', 'sr37', 'sr38', 'sr39', 'sr40', 'sr41', 'sr42', 'sr43', 'l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 'l11', 'l12', 'l13', 'l14', 'l15', 'l16', 'l17'
     , 'l18', 'l19', 'l20', 'l21', 'l22', 'l23', 'l24', 'l26', 'l27', 'l28'];

     var shortName = "C1";
      $httpBackend.whenGET(ApiPath + '/menu_items/'+shortName+'.json').respond({'shortName':shortName});
      MenuService.getByShortName(shortName)
      .then(function(response) {
        //console.log('res', response);
        expect(response).toEqual({'shortName':shortName});
      });
      $httpBackend.flush();
    });

});
