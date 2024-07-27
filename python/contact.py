contacts = []

def add_contact(contact_list,name,phone):
    contact = {"name":name,"phone":phone}
    contact_list.append(contact)
    print(f"Contact {name} added successfully")
    #view_contacts(contact_list)

def view_contacts(contact_list):
    if not contact_list:
        print("No Contact Found")
    else:
        print("Current Contacts:")
        for contact in contact_list:
            print(f"Name: {contact['name']},Phone:{contact['phone']}")

def search_contact(contact_list,name):
    matches = []
    for contact in contact_list:
        if contact['name'].lower() == name.lower():
            matches.append(contact)

    if matches:
        print(f"Found {len(matches)} contacts:")
        for contact in matches:
            print(f"Found contact: Name: {contact['name']}, Phone:{contact['phone']}")
    else:
        print("No Contact Found")

    return matches


def delete_contact(contact_list,name):
    i = 0
    deleted = False

    while i < len(contact_list):
        if contact_list[i]['name'].lower() == name.lower():
            del contact_list[i]
            deleted = True
        else:
            i += 1

    if deleted:
        print(f"Contact with name '{name}' deleted Successfully")
    else:
        print("Contact not found")

    return contact_list


# deleteing one by one
# def delete_contact(contact_list,name):
#     for contact in contact_list:
#         if contact['name'].lower() == name.lower():
#             contact_list.remove(contact)
#             print(f"Contact {name} deleted successfully")
#             return
#     print("Contact not found")

# Delete all matching value
# def delete_contact(contact_list,name):
#     new_contact_list = [contact for contact in contact_list if contact['name'].lower() != name.lower()]

#     if len(new_contact_list) < len(contact_list):
#         print(f"Contact With name '{name}' deleted successfully")
#         view_contacts(new_contact_list)
#         return new_contact_list

#     else:
#         print("Contact not found")


print("Welcome to the Content Management System")
print("\n Please choose an option:")
print("1. Add a Contact")
print("2. View all Contacts")
print("3. Search Contacts")
print("4. Delete Contacts")
print("5. Exit")
while True:
    choice = input("Enter Your Choice: ")

    if choice == "1":
        name = input("Enter Name: ")
        phone = input("Enter Phone Number: ")
        add_contact(contacts,name,phone)
    elif choice == "2":
        view_contacts(contacts)
    elif choice == "3":
        name = input("Enter the name of the contact to search for: ")
        search_contact(contacts,name)
    elif choice == "4":
        name = input("Enter the name of the contact to delete: ")
        delete_contact(contacts,name)
    elif choice == "5":
        print("Goodbye")
        break
    else:
        print("Invalid Choice. Please try again")

