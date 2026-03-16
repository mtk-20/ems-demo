package com.mtk.employee_management.common.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Basic {

    private boolean success;
    private String code;
    private Object result;
    private String message;
}
