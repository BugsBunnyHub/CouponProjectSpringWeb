package coupon.project.beans;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.Objects;


@Entity
//@Table(name = "Coupons", uniqueConstraints =
//        {@UniqueConstraint(columnNames = "title", name = "uniqueTitleConstraint")})
@Component
@Scope("prototype") //can create many coupons
public class Coupon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//GeneratedValue is used to specify how the primary key should be generated
    public int id;
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "company_id")
    //@JsonManagedReference
    //@JsonManagedReference is the forward part of reference – the one that gets serialized normally.
    private Company companyID;
    @Column(name = "amount")
    /*
      @Min, @Max works for int @Size works for String/collection
     * @NotBlank best of all options for empty/invalid input checks
     */
    private int amount;
    @NotBlank
    @Column(name = "title", unique = true) //"unique" can be used as a shortcut for UniqueConstraint
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "image")
    private String image;
    @Column(name = "category")
    private Category category;
    @Column(name = "start_Date")
    private Date startDate;
    @Column(name = "end_Date")
    private Date endDate;
    @Column(name = "price")
    private double price;

    //empty con for hibernate
    public Coupon() {
    }

    public Coupon(@NotBlank Company companyID, @NotBlank int amount, @NotBlank String title, String description, String image,
                  Category category, Date startDate, Date endDate, double price) {
        this.companyID = companyID;
        this.amount = amount;
        this.title = title;
        this.description = description;
        this.image = image;
        this.category = category;
        this.startDate = startDate;
        this.endDate = endDate;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    //should be never used since it's @Id, however DB would ignore setId
    public void setId(int id) {
        this.id = id;
    }

    //used for coupon ID set in web
    public void setCompanyID(Company companyID) {
        this.companyID = companyID;
    }

    public Company getCompanyID() {
        return companyID;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Coupon coupon = (Coupon) o;
        return id == coupon.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Coupon{" +
                "id=" + id +
                ", companyID=" + companyID +
                ", amount=" + amount +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", category=" + category +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", price=" + price +
                '}';
    }
}
