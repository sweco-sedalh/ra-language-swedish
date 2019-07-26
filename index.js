module.exports = {
    ra: {
        action: {
            delete: 'Radera',
            show: 'Visa',
            list: 'Lista',
            save: 'Spara',
            create: 'Skapa',
            edit: 'Redigera',
            cancel: 'Avbryt',
            refresh: 'Ladda om',
            add_filter: 'Lägg till filter',
            remove_filter: 'Ta bort filter',
            add: 'Lägg till',
            back: 'Gå tillbaka',
            bulk_actions: '1 objekt valt |||| %{smart_count} objekt valda',
            clear_input_value: 'Rensa värde',
            clone: 'Klona',
            confirm: 'Bekräfta',
            export: 'Exportera',
            remove: 'Ta bort',
            search: 'Sök',
            sort: 'Sortera',
            undo: 'Ångra',
            expand: 'Expandera',
            close: 'Stäng',
        },
        boolean: {
            true: 'Ja',
            false: 'Nej',
        },
        page: {
            list: 'Lista över %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Skapa %{name}',
            dashboard: 'Överblick',
            error: 'Något gick snett',
            loading: 'Laddar',
            not_found: 'Hittades inte',
        },
        input: {
            file: {
                upload_several:
                    'Drag och släpp filer för att ladda upp, eller klicka för att välja fil.',
                upload_single: 
                    'Drag och släpp en fil för att ladda upp, eller klicka för att välja fil.',
            },
            image: {
                upload_several: 
                    'Drag och släpp bildfiler för att ladda upp, eller klicka för att välja bildfil.',
                upload_single: 
                    'Drag och släpp en bildfil för att ladda upp, eller klicka för att välja bildfil.',
            },
            references: {
                all_missing: 'Hittade inte referensdata.',
                many_missing:
                    'Minst en av den associerade referensen verkar inte längre finnas tillgänglig.',
                single_missing:
                    'De associerade referenserna verkar inte längre finnas tillgängliga.',
            },
        },
        message: {
            yes: 'Ja',
            no: 'Nej',
            are_you_sure: 'Är du säker?',
            about: 'Om',
            bulk_delete_content:
                'Är du säker på att du vill radera denna %{name}? |||| Är du säker på att du vill radera dessa %{smart_count} objekt?',
            bulk_delete_title:
                'Radera %{name} |||| Radera %{smart_count} %{name}',
            delete_content: 'Är du säker på att du vill radera detta objekt?',
            delete_title: 'Radera %{name} #%{id}',
            details: 'Detaljer',
            error:
                "Ett klientfel inträffade och din förfrågan kunde inte slutföras.",
            invalid_form: 'Den angivna datan har fel form. Var god kontrollera datan.',
            loading: 'Sidan laddas, var god vänta',
            not_found:
                'Du har antingen skrivit en felaktig URL, eller följt en dålig länk.',
        },
        navigation: {
            no_results: 'Inga resultat hittades',
            page_out_of_boundaries: 'Sidnummer %{page} utanför spannet',
            page_out_from_end: 'Kan inte besöka sida efter sista sidan',
            page_out_from_begin: 'Kan inte besöka sida före första sidan',
            page_range_info: '%{offsetBegin}-%{offsetEnd} av %{total}',
            next: 'Nästa',
            prev: 'Föregående',
            no_more_results:
                'Sidnumret %{page} är utanför spannet. Försök med tidigare sida.',
            page_rows_per_page: 'Rader per sida:',
        },
        auth: {
            username: 'Användarnamn',
            password: 'Lösenord',
            sign_in: 'Logga in',
            sign_in_error: 'Inloggning misslyckades, försök gärna igen',
            logout: 'Logga ut',
            user_menu: 'Profil',
        },
        notification: {
            item_doesnt_exist: 'Objektet hittas inte',
            http_error: 'Kommunikationsfel med servern',
            updated: 'Objekt uppdaterat |||| %{smart_count} objekt uppdaterade',
            created: 'Objekt skapat',
            deleted: 'Objekt raderat |||| %{smart_count} objekt raderade',
            bad_item: 'Felaktigt objekt.',
            data_provider_error:
                'dataProvider-fel. Se konsollen för detaljer.',
            canceled: 'Åtgärd avbruten',
            logged_out: 'Din session har gått ut, vänligen återanslut.',
        },
        validation: {
            required: 'Obligatorisk',
            minLength: 'Måste vara minst %{min} tecken',
            maxLength: 'Måste vara max %{max} tecken',
            minValue: 'Måste vara minst %{min}',
            maxValue: 'Måste vara max %{max}',
            number: 'Måste vara ett nummer number',
            email: 'Måste vara en giltig e-postadress',
            oneOf: 'Måste vara en av: %{options}',
            regex: 'Måste matcha ett specifikt format (regexp): %{pattern}',
        },
    },
};
