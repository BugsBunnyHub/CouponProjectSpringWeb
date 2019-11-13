package coupon.project;


import coupon.project.DB.CompanyDBDAO;
import coupon.project.DB.CouponRepo;
import coupon.project.beans.Company;
import coupon.project.login.LoginManger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class CouponcrojectspringApplication {

    @Autowired
    static CouponRepo repo;

    public static void main(String[] args) {


        ConfigurableApplicationContext ctx = SpringApplication.run(CouponcrojectspringApplication.class, args);
        try {

            LoginManger loginManger = ctx.getBean(LoginManger.class);

//            CustomerDBDAO cu1 = ctx.getBean(CustomerDBDAO.class);
//            cu1.addCustomer(new Customer("Daniel", "Shatz", "DanielShatz@gmail.com", "123"));

            CompanyDBDAO co1 = ctx.getBean(CompanyDBDAO.class);
            Company c1 = new Company("Shatz ltd", "shatz@shatz.com", "123");
            co1.addCompany(c1);

//            CompanyFacade companyFacade = (CompanyFacade) loginManger.login("shatz@shatz.com", "123", ClientType.Company);
//            Coupon c2 = new Coupon(c1, 100, "title", "description", "cat.jpg", Category.Electricity, new Date(2656565656565L), new Date(4545454545454L), 5555.5);
//            companyFacade.addCoupon(c2);
//
//            CustomerFacade customerFacade = (CustomerFacade) loginManger.login("DanielShatz@gmail.com", "123", ClientType.Customer);
//            List<Coupon> coupons = repo.findAllByAmountIsGreaterThanAndEndDateIsAfter(0, new Date(Instant.now().getEpochSecond() * 1000)); // getEpochSecond get's time  in seconds, *1000 to get it in miliseconds
//            Coupon coupon = coupons.get(0);
//            customerFacade.purchaseCoupon(coupon.getId());

        } catch (Exception e) {
            System.out.println("off");
        }


    }

}
