package com.mtk.employee_management.controller;

import com.mtk.employee_management.dto.EmployeeDto;
import com.mtk.employee_management.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeService service;

    @PostMapping("/create")
    public ResponseEntity<EmployeeDto> handleCreateEmployee(@RequestBody EmployeeDto dto) {
        EmployeeDto emp = service.createEmployee(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(emp);
    }

    @GetMapping("/by-id/{id}")
    public ResponseEntity<EmployeeDto> handleGetEmployeeById(@PathVariable("id") Long id) {
        EmployeeDto getById = service.getEmployeeById(id);
        return ResponseEntity.ok(getById);
    }

    @GetMapping()
    public ResponseEntity<List<EmployeeDto>> handleGetAllEmployees() {
        List<EmployeeDto> allEmployees = service.getAllEmployees();
        return ResponseEntity.ok(allEmployees);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<EmployeeDto> handleUpdateEmployee(@PathVariable("id") Long id, @RequestBody EmployeeDto dto) {
        EmployeeDto updated = service.updateEmployee(id, dto);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> handleDeleteEmployee(@PathVariable("id") Long id) {
        service.deleteEmployee(id);
        return ResponseEntity.ok().body("Employee deleted successfully.");
    }
}
