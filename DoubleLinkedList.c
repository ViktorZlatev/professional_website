#include <stdlib.h>
#include <stdio.h>

typedef struct Node
{
    int value;
    struct Node *next;
    struct Node *prev;
} Node;
typedef struct DList
{
    Node *head;
    Node *tail;
} DList;

DList *init_dlist();
void insertBegin(DList *, int);
void insertEnd(DList *, int);

Node *getAt(DList *, int);
void clear(DList *);
int pop(DList *);
void printDList(DList *);
void printDListReverse(DList *);
int popFront(DList *);

void insertAt(DList *, Node *, Node *);
Node *removeAt(DList *, Node *);

Node *createNode(int val);
void insertBefore(DList *l, Node *it, Node *val);
void insertAfter(DList *l, Node *it, Node *val);
Node *removeAt(DList *l, Node *val);

DList *init_dlist()
{
    DList *l = (DList *)malloc(sizeof(DList));
    l->head = NULL;
    l->tail = NULL;

    return l;
}

Node *createNode(int val)
{
    Node *n = (Node *)malloc(sizeof(Node));
    n->value = val;
    n->next = NULL;
    n->prev = NULL;
}

void insertBegin(DList *l, int val)
{
    Node *n = createNode(val);

    if (l->head == NULL)
    {
        l->head = n;
        l->tail = n;

        return;
    }

    n->next = l->head;
    l->head->prev = n;
    l->head = n;
}

void insertEnd(DList *l, int val)
{
    Node *n = createNode(val);

    if (l->tail == NULL)
    {
        l->head = n;
        l->tail = n;

        return;
    }

    n->prev = l->tail;
    l->tail->next = n;
    l->tail = n;
}

Node *getAt(DList *l, int index)
{
    int i = 0;
    Node *it = l->head;

    while (it != NULL && i < index)
    {
        it = it->next;
        i++;
    }

    if (i == index)
    {
        return it;
    }

    // handle error
    printf("Index out of range");
    exit(1);
}

int popFront(DList *l)
{
    if (l->head == NULL)
    {
        printf("Cannot pop from EMPTY\n");
        exit(1);
    }

    int val = l->head->value;
    Node *head = l->head;

    if (l->head->next == NULL)
    {
        l->head = NULL;
        l->tail = NULL;
    }
    else
    {
        l->head->next->prev = NULL;
        l->head = l->head->next;
    }

    free(head);

    return val;
}

int pop(DList *l)
{
    if (l->tail == NULL)
    {
        printf("Cannot pop from EMPTY\n");
        exit(1);
    }

    int val = l->tail->value;
    Node *tail = l->tail;

    if (l->tail->prev == NULL)
    {
        l->head = NULL;
        l->tail = NULL;
    }
    else
    {
        l->tail->prev->next = NULL;
        l->tail = l->tail->prev;
    }

    free(tail);

    return val;
}

void printDList(DList *l)
{
    if (l->head == NULL)
    {
        printf("EMPTY\n");
        return;
    }

    Node *it = l->head;

    while (it != NULL)
    {
        printf("%d ", it->value);
        it = it->next;
    }

    printf("\n");
}

void printDListReverse(DList *l)
{
    if (l->tail == NULL)
    {
        printf("EMPTY\n");
        return;
    }

    Node *it = l->tail;

    while (it != NULL)
    {
        printf("%d ", it->value);
        it = it->prev;
    }

    printf("\n");
}

void clear(DList *l)
{
    Node *it = l->head;

    while (it != NULL)
    {
        Node *tmp = it;
        it = it->next;
        free(tmp);
    }

    free(l);
}

void insertAfter(DList *existingList, Node *it, Node *val)
{

    if (it->next = NULL)
    {
        Node *temp = existingList->tail;
        existingList->tail = it->value;
        it->prev = temp;

        return;
    }

    Node *temp = it->next;
    it->next = val->value;
    val->next = temp;
    val->prev = it->value;
}

void insertBefore(DList *existingList, Node *it, Node *val)
{
    if (it->prev == NULL)
    {
        Node *temp = existingList->head;
        existingList->head = it;
        it->next = temp;

        return;
    }

    Node *temp = it->next;
}

Node *removeAt(DList *l, Node *val)
{

    return val;
}
