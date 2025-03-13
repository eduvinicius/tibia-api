/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HomeComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title correctly', () => {
    const h1Element: HTMLHeadElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1Element?.textContent?.trim()).toBe('Bem-vindo(a) ao Tibia API');
  });

  it('should render the image with correct src and alt attributes', () => {
    const imgElement: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement.src).toContain('assets/images/tibia-bg.jpg');
    expect(imgElement.alt).toBe('Foto Tibia');
  });

  it('should render paragraphs with expected content', () => {
    const paragraphs: HTMLHeadElement[] = fixture.debugElement.queryAll(By.css('p')).map(el => el.nativeElement.textContent.trim());

    expect(paragraphs[0]).toContain('Tibia é um jogo eletrônico de RPG multijogador');
    expect(paragraphs[1]).toContain('Este projeto oferece diversas informações como criaturas');
  });

});
