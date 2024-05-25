import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ExamenesService } from './examenes.service';
import { Iexamenes } from './models';

describe('ExamenesService', () => {
  let service: ExamenesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExamenesService]
    });
    service = TestBed.inject(ExamenesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch examenes', () => {
    const mockExamenes: Iexamenes[] = [
      { id: 1, materia: 'Matemáticas', carrera: 'Ingeniería', createdAt: new Date() },
      { id: 2, materia: 'Física', carrera: 'Ingeniería', createdAt: new Date() }
    ];

    service.getExamenes().subscribe((examenes) => {
      expect(examenes.length).toBe(2);
      expect(examenes).toEqual(mockExamenes);
    });

    const req = httpMock.expectOne('http://tuservidorapi.com/api/examenes');
    expect(req.request.method).toBe('GET');
    req.flush(mockExamenes);
  });

  it('should handle inscribirseExamen', () => {
    const examenId = 1;
    service.inscribirseExamen(examenId).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`http://tuservidorapi.com/api/examenes/${examenId}/inscribirse`);
    expect(req.request.method).toBe('POST');
    req.flush({ success: true });
  });
});

