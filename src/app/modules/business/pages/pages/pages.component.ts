import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Page } from 'src/app/core/interfaces';
import { PageService } from '../../../../core/services/page.service';
import { Block } from '../../../../core/interfaces/block.interface';
import { ConfirmationModalComponent } from '../../components/confirmation-modal/confirmation-modal.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  isDefaultRoute: boolean = false;
  addMode: boolean = false;
  editMode: boolean = false;

  page: Page = {
    name: '',
    blocks: [],
  };

  pages: Page[] = [];
  constructor(
    private router: Router,
    private pageService: PageService,
    private dialog: MatDialog,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.verifyRoute();
    this.pageService.getPagesByStore().subscribe((data) => (this.pages = data));
  }

  async verifyRoute() {
    if (this.page._id) {
      console.log('edit navigation');
      await this.router.navigate(['business/pages/edit', this.page._id]);
    } else if (!this.page._id && !this.addMode) {
      console.log('Default navigation');
      // await this.router.navigate(['admin/plans']);
    } else if (this.addMode) {
      console.log('Create Navigation');
      await this.router.navigate(['business/pages/create']);
    }

    if (this.router.url.includes('create')) {
      console.log('create');
      this.isDefaultRoute = false;
      console.log(this.isDefaultRoute);
    } else if (this.router.url.includes('edit')) {
      console.log('edit');
      this.editMode = true;
      this.isDefaultRoute = false;
      console.log(this.isDefaultRoute);
    } else {
      console.log('default');
      this.isDefaultRoute = true;
      console.log(this.isDefaultRoute);
    }
  }

  async getOptionSelected({ _id, ...rest }: any) {
    this.addMode = false;
    console.log(rest);
    this.page = { _id, ...rest };
    await this.verifyRoute();
  }

  async getAddState(value: boolean) {
    this.addMode = value;

    this.page = {
      name: 'Default Page',
      blocks: [
        {
          name: 'Navbar',
          color: '#00b3ffbf',
          cssClass: 'navbar-block',
        },
        {
          name: 'Left Panel',
          color: '#00ff99bf',
          cssClass: 'panel-block',
        },
        {
          name: 'Right Panel',
          color: '#fafffdbf',
          cssClass: 'unnamed-block',
        },
        {
          name: 'Product Galery',
          color: '#ff668bbf',
          cssClass: 'products-block',
        },
        {
          name: 'Footer',
          color: '#fcff62bf',
          cssClass: 'footer-block',
        },
      ],
    };
    await this.verifyRoute();
  }

  save({ fg, id }: { fg: FormGroup<any>; id: string | undefined }) {
    if (!this.editMode) {
      this.pageService
        .createPage(fg.value)
        .subscribe((data) => this.pages.push(data));
    } else {
      this.page.name = fg.value.name;
      this.page.blocks = fg.value.blocks;

      this.pageService
        .updatePage(id, this.page)
        .subscribe((data) => console.log(data));

      for (const page of this.pages) {
        if (page._id === this.page._id) {
          page.name = this.page.name;
          break;
        }
      }
    }
  }

  updateBlock(newBlock: Block) {
    for (const block of this.page.blocks) {
      if (block._id === newBlock._id) {
        block.name = newBlock.name;
        block.color = newBlock.color;
        block.components = newBlock.components;
        block.cssCode = newBlock.cssCode;
        block.htmlCode = newBlock.htmlCode;
        block.jsCode = newBlock.jsCode;
        break;
      }
    }
  }

  getDeleteMode({
    deleteState,
    option,
  }: {
    deleteState: boolean;
    option: any;
  }) {
    if (deleteState) {
      const dialogRef = this.dialog.open(ConfirmationModalComponent, {
        data: option,
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result.data) {
          this.pageService
            .removePage(option._id)
            .subscribe((data) => console.log(data));
          this.pages = this.pages.filter((page) => page._id !== option._id);
        }
      });
    }
  }
}
