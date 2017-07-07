package myPackage.persistence;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

/**
 * Created by thebous on 07/07/17.
 */
@Getter
@Setter
@AllArgsConstructor @NoArgsConstructor
@Table
@Entity(name="user")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;

    @Column
    private String Username;

    @Column
    private String Password;
}
