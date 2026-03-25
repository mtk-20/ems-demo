package com.mtk.employee_management.controller;

import com.mtk.employee_management.dto.DepartmentDto;
import com.mtk.employee_management.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/departments")
public class DepartmentController {

    private final DepartmentService service;

    @PostMapping("/create")
    public ResponseEntity<DepartmentDto> handleCreateDepartment(@RequestBody DepartmentDto dto) {
        DepartmentDto dept = service.createDepartment(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(dept);
    }

    @GetMapping("/by-id/{id}")
    public ResponseEntity<DepartmentDto> handleGetDepartmentById(@PathVariable("id") Long id) {
        DepartmentDto dept = service.getDepartmentById((id));
        return ResponseEntity.ok().body(dept);
    }

    @GetMapping()
    public ResponseEntity<List<DepartmentDto>> handleGetAllDepartments() {
        List<DepartmentDto> depts = service.getAllDepartments();
        return ResponseEntity.ok().body(depts);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<DepartmentDto> handleUpdateDepartment(@PathVariable("id") Long id, @RequestBody DepartmentDto dto) {
        DepartmentDto dept = service.updateDepartment(id, dto);
        return ResponseEntity.ok().body(dept);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> handleDeleteDepartment(@PathVariable("id") Long id) {
        service.deleteDepartment(id);
        return ResponseEntity.ok().body("Department deleted successfully.");
    }
}
