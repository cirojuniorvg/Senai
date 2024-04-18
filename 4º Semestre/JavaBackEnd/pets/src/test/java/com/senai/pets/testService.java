package com.senai.pets;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class testService {

 protected double fValue1 = 2.0;
 protected double fValue2 = 3.0;

 @Test
 public void testAdd(){
    assertEquals(fValue1 + fValue2, 5.0);
 }

}
