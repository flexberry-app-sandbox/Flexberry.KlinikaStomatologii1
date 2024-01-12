package KlinikaStomatologii.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KlinikaStomatologii.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Услуга
 */
@Entity(name = "IISKlinikaStomatologiiУслуга")
@Table(schema = "public", name = "Услуга")
public class Usluga {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодУслуги")
    private Integer кодуслуги;

    @Column(name = "Цена")
    private Double цена;

    @Column(name = "Наименование")
    private String наименование;

    @OneToMany(mappedBy = "usluga", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavUslugi> sostavuslugis;


    public Usluga() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодУслуги() {
      return кодуслуги;
    }

    public void setКодУслуги(Integer кодуслуги) {
      this.кодуслуги = кодуслуги;
    }

    public Double getЦена() {
      return цена;
    }

    public void setЦена(Double цена) {
      this.цена = цена;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}