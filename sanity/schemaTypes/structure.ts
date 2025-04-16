import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {TextIcon, BookIcon, UsersIcon} from '@sanity/icons'

export const structure = (S: any, context: any) =>
  S.list()
    .title('Content')
    .items([
      orderableDocumentListDeskItem({
        type: 'page',
        title: 'Pages',
        icon: TextIcon,
        S,
        context,
      }),
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('Post')
            .defaultOrdering([{field: '_createdAt', direction: 'desc'}]), // Default ordering
        ),
      orderableDocumentListDeskItem({
        type: 'category',
        title: 'Categories',
        icon: BookIcon,
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'author',
        title: 'Authors',
        icon: UsersIcon,
        S,
        context,
      }),
    ])
