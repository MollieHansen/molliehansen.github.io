import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  isArray(details: any): boolean {
    return Array.isArray(details);
  }

  sections = [
    {
      title: 'Education',
      items: [
        {
          year: '2022 - Present',
          title: 'MFA Candidate in Glass - Tyler School of Art and Architecture, Temple University',
          details: 'Certitficate in Teaching in Higher Education',
          location: 'Philadelphia, PA'
        },
        {
          year: '2012 - 2016',
          title: 'Bachelors of Art - Centre College',
          details: 'Major in Studio Art and Art History\nMinor in International Studies',
          location: 'Danville, KY'
        },
        {
          year: '2008 - 2012',
          title: 'Detroit Country Day School',
          details: '',
          location: 'Beverly Hills, MI'
        }
      ]
    },
    {
      title: 'Work Experience',
      items: [
        {
          year: '2023 - Present',
          title: 'Graduate Assistant',
          details: 'Contemporary Gallery',
          location: 'Philadelphia, PA'
        },
        {
          year: '2019 - 2020',
          title: 'Artist Assistant',
          details: 'Susan Zoccola',
          location: 'Seattle, WA'
        },
        {
          year: '2019',
          title: 'Summer Staff',
          details: 'Pilchuck Glass School',
          location: 'Stanwood, WA'
        },
        {
          year: '2017',
          title: 'Visiting Artist Coordinator',
          details: 'Chrysler Museum of Art Glass Studio',
          location: 'Norfolk, VA'
        },
        {
          year: '2017',
          title: 'Vestibule Exhibition Co-Coordinator',
          details: 'Chrysler Museum of Art Glass Studio',
          location: 'Norfolk, VA'
        }
      ]
    },
    {
      title: 'Glass Work Experience',
      items: [
        { year: '2024', title: 'Glass Fellow', details: 'Pilchuck Glass School', location: 'Stanwood, WA' },
        { year: '2022', title: 'Production Assistant', details: 'Epiphany Glass Studio', location: 'Detroit, MI' },
        { year: '2020-2021', title: 'Production Glassblower', details: 'Glassybaby', location: 'Redmond, WA' },
        { year: '2019', title: 'Substitute Glassblower', details: 'Glassybaby', location: 'Seattle, WA' },
        { year: '2019', title: 'Summer Staff Hot Shop', details: 'Pilchuck Glass School', location: 'Stanwood, WA' },
        { year: '2018', title: 'Production Glassblower', details: 'Glasseye Studio', location: 'Seattle, WA' },
        { year: '2017-2018', title: 'Studio Maintenance', details: 'Seattle Glassblowing Studio', location: 'Seattle, WA' },
        { year: '2017-2018', title: 'Production Assistant', details: 'Marilee Moore', location: 'Seattle, WA' },
        { year: '2017-2018', title: 'Volunteer Assistant', details: 'Nancy Callan', location: 'Seattle, WA' },
        { year: '2016-2017', title: 'Studio Assistant', details: 'Chrysler Museum of Art Glass Studio', location: 'Norfolk, VA' },
        { year: '2017', title: 'Assistant', details: 'Julia and Robin Rogers', location: 'Norfolk, VA' },
        { year: '2016-2017', title: 'Assistant', details: 'Sarah Vaughn', location: 'Norfolk, VA' },
        { year: '2016-2017', title: 'Assistant', details: 'Gayle Forman', location: 'Norfolk, VA' },
        { year: '2016-2017', title: 'Production Assistant', details: 'Josh Soloman', location: 'Norfolk, VA' },
        { year: '2015-2016', title: 'Assistant', details: 'Stephen Powell', location: 'Danville, KY' },
        { year: '2012-2015', title: 'Studio Assistant', details: 'Epiphany Glass Studio', location: 'Pontiac, MI' }
      ]
    },
    {
      title: 'Teaching Experience',
      items: [
        { year: '2024', title: 'Teaching Assistant', details: 'Jessica Jane Julius, Tyler School of Art and Architecture', location: 'Philadelphia, PA' },
        { year: '2022', title: 'Teaching Assistant', details: 'Megan Stelljes and Minhi England, Pilchuck Glass School', location: 'Stanwood, WA' },
        { year: '2022', title: 'Teaching Assistant', details: 'Beth Lipman, Pilchuck Glass School', location: 'Stanwood, WA' },
        { year: '2017-2020', title: 'Instructor', details: 'Seattle Glassblowing Studio', location: 'Seattle, WA' },
        { year: '2017', title: 'Professional Development Teaching Assistant', details: 'Chrysler Museum of Art', location: 'Norfolk, VA' },
        { year: '2017', title: 'Teaching Assistant', details: 'Emma Stein, Ox-bow Art School', location: 'Saugatuck, MI' },
        { year: '2017', title: 'Teaching Assistant', details: 'Old Dominion University', location: 'Norfolk, VA' }
      ]
    },
    {
      title: 'Exhibitions',
      items: [
        { year: '2024', title: '10th Annual Glass International Juried Exhibition', details: 'Workhouse Arts Center', location: 'Lorton, VA' },
        { year: '2024', title: 'Featured work in Publication', details: 'New Glass Review 44, Corning Museum of Glass', location: 'Corning, NY' },
        { year: '2024', title: 'Fuzzy Forms Exhibition', details: 'Stella Elkin Gallery', location: 'Philadelphia, PA' },
        { year: '2022', title: 'SRP Legacy Exhibition', details: 'Aegon Gallery', location: 'Danville, KY' },
        { year: '2019', title: 'Let Them Eat Cake group show', details: 'Gordon Art Galleries', location: 'Norfolk, VA' },
        { year: '2019', title: 'Art of the Garden group show', details: 'The Schack Art Center', location: 'Everett, WA' },
        { year: '2019', title: 'Motherland Member Show', details: 'Center of Contemporary Art', location: 'Seattle, WA' },
        { year: '2017', title: 'Dreamhouse Remix group exhibition', details: 'Peninsula of Fine Arts', location: 'Newport News, VA' },
        { year: '2017', title: 'Group Show', details: 'Harbor Group International Gallery', location: 'Norfolk, VA' },
        { year: '2017', title: 'GAS Member show', details: 'Glasswheel Studio', location: 'Norfolk, VA' },
        { year: '2017', title: 'Group exhibition', details: 'Chrysler Museum Vestibule 102', location: 'Norfolk, VA' },
        { year: '2016', title: 'Solo exhibition', details: 'Chrysler Museum Vestibule 102', location: 'Norfolk, VA' },
        { year: '2016', title: 'Solo installation', details: 'Chrysler Museum Powder Room Exhibition Space', location: 'Norfolk, VA' },
        { year: '2016', title: 'Centre group exhibition', details: 'Aegon Gallery', location: 'Danville, KY' },
        { year: '2015', title: 'RICE group exhibition', details: 'Aegon Gallery', location: 'Danville, KY' },
        { year: '2014', title: 'RICE group exhibition', details: 'Aegon Gallery', location: 'Danville, KY' }
      ]
    },
    {
      title: 'Curatorial Work',
      items: [
        { year: '2024', title: 'Curator of Echo-Systems Exhibition', details: 'Temple Contemporary', location: 'Philadelphia, PA' }
      ]
    },
    {
      title: 'Glass Workshop Education',
      items: [
        { year: '2022', title: 'Glass Workshop', details: 'Pilchuck Glass School, Instructed by Tomas Colbington', location: 'Stanwood, WA' },
        { year: '2017', title: 'Glass Workshop', details: 'Urban Glass, Instructed by Nancy Callen and Katherine Grey', location: 'Brooklyn, NY' },
        { year: '2017', title: 'Guest Instructor Program', details: 'Chrysler Museum, Instructed by David Walters', location: 'Norfolk, VA' },
        { year: '2017', title: 'Assistantship Lessons', details: 'Chrysler Museum, Instructed by Robin Rogers', location: 'Norfolk, VA' },
        { year: '2016', title: 'Glass Workshop', details: 'Pilchuck Glass School, Instructed by D.H. McNabb', location: 'Stanwood, WA' },
        { year: '2015', title: 'Glass Workshop', details: 'Haystack Mountain School of Crafts, Instructed by Nancy Callan', location: 'Deer Isle, ME' },
        { year: '2015', title: 'Glass Workshop', details: 'Pilchuck Glass School, Instructed by James Anderegg', location: 'Stanwood, WA' }
      ]
    },
    {
      title: 'Honors / Awards',
      items: [
        { year: '2023 - Present', title: 'Graduate Assistantship', details: 'Temple Contemporary', location: 'Philadelphia, PA' },
        { year: '2022', title: 'Pilchuck Glass Fellowship', details: '', location: 'Stanwood, WA' },
        { year: '2017', title: 'AACG Scholarship Fund', details: 'Full Scholarship for Blowing and Painting on Glass with David Walters', location: 'Norfolk, VA' },
        { year: '2012 - 2016', title: 'Academic Honors',  details: [
          'Centre College',
          'Faculty Language Scholarship',
          'Centre Award-Merit Scholarship',
          'Centre Endowment Grant',
          'Dean’s List (2015-2016)'
        ], location: 'Danville, KY'
        },
        {
          year: '2012',
          title: 'High School Honors',
          details: [
            'Detroit Country Day School',
            'Summa Cum Laude; Cum Laude Society',
            'Schwarzer Art Cup Recipient',
            '1st Place National Scholastic Magazine Composition',
            'Spectrum Magazine, Editor-in-Chief',
            'Academic All American and Academic All State-Lacrosse',
            'Best in Show Portfolio, Scholastic Art Regional Competition',
            'National Gold Key, Scholastic Art Competition'
          ],
          location: 'Beverly Hills, MI'
        }
      ]
    },
    {
      title: 'Extra Curricular',
      items: [
        {
          year: '2024 - Present',
          title: 'Co-founder',
          details: 'GLOW (Glass Lab of Wonder) at Tyler School of Art and Architecture',
          location: 'Philadelphia, PA'
        },
        {
          year: '2012 - 2016',
          title: 'Member at Large',
          details: 'Centre College Art Society',
          location: 'Danville, KY'
        },
        {
          year: '2013 - 2016',
          title: 'Vice President',
          details: 'Centre College Japanese Club',
          location: 'Danville, KY'
        },
        {
          year: '2013 - 2014',
          title: 'Team Member',
          details: 'Yamaguchi Prefectural University’s Lacrosse Club',
          location: 'Yamaguchi, Japan'
        },
        {
          year: '2012 - 2013',
          title: 'Team Member',
          details: 'Centre College Lacrosse',
          location: 'Danville, KY'
        },
        {
          year: '2012',
          title: 'Editor-in-Chief',
          details: 'Spectrum Literary Magazine',
          location: 'Beverly Hills, MI'
        },
        {
          year: '2011',
          title: 'Editor',
          details: 'Eyeline Visual Arts Magazine',
          location: 'Beverly Hills, MI'
        }
      ]
    },
    {
      title: 'Skills',
      items: [
        {
          year: '',
          title: 'Software',
          details: [
            'Microsoft Office',
            'Adobe Photoshop',
            'Adobe InDesign',
            'Adobe Premiere Pro'
          ],
          location: ''
        },
        {
          year: '',
          title: 'Glass Techniques',
          details: [
            'Glassblowing',
            'Flameworking',
            'Cold-working',
            'Kiln working',
            'Enamel painting / screen printing',
            'Stained glass'
          ],
          location: ''
        },
        {
          year: '',
          title: 'Other Artistic Skills',
          details: [
            'Jewelry',
            'Painting',
            'Drawing',
            'Photography',
            'Screen Printing',
            'Ceramics'
          ],
          location: ''
        },
        {
          year: '',
          title: 'Professional Skills',
          details: [
            'Studio Operations / Management',
            'Exhibition Programming'
          ],
          location: ''
        },
        {
          year: '',
          title: 'Languages',
          details: [
            'Proficient in Japanese'
          ],
          location: ''
        }
      ]
    }    
  ]
}
