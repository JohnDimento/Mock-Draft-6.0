// Draft data
const draftData = {
    round1: [
        {
            pick: 1,
            team: "Winston's Warriors",
            player: "Ashton Jeanty - RB",
            description: "The consensus No. 1 pick. Jeanty’s explosive burst and elite contact balance let him absorb hits at the catch point and drive through defenders."
        },
        {
            pick: 2,
            team: "Winston's Warriors",
            player: "Tetairoa Mcmillan - WR",
            description: "A tall, athletic receiver with excellent ball skills. Mcmillan would fit perfectly into the Warrior's WR room."
        },
        {
            pick: 3,
            team: "DoosBoys",
            player: "Omarion Hampton - RB",
            description: "Hampton is a powerful, three-down back with dependable hands and the vision to consistently hit creases. At 1.02, he perfectly addresses the DoosBoys’ need for a RB1."
        },
        {
            pick: 4,
            team: "Dropkick Murphys",
            player: "Matthew Golden - WR",
            description: "Go Pack Go! Analytics may say that this is a reach, but Golden is a quick WR with great hands and the upside to take over in this Packer's offense."
        },
        {
            pick: 5,
            team: "Lil Peanut's Padres",
            player: "Cam Ward - QB",
            description: "With only 1 starting QB on the roster, the Padres have the opportunity to draft the face of their franchise for the future of the league. It's hard to pass on the 1.01 at pick 5."
        },
        {
            pick: 6,
            team: "Watauga Whonsters",
            player: "Treveyon Henderson - RB",
            description: "A dynamic playmaker with home-run hitting ability. Henderson adds another explosive young weapon to the Whonsters' offense."
        },
        {
            pick: 7,
            team: "Memphis Jets",
            player: "Travis Hunter - WR/DB",
            description: "A dream scenario for the Jets. Hunter falls here because of his snap count and target share risks, but the Jets are quick to scoop him up."
        },
        {
            pick: 8,
            team: "Arlington Ladds",
            player: "Emeka Egbuka - WR",
            description: "Landing spot is the only question here for Egbuka. With an already stacked WR room, the Ladds get to wait for Egbuka to blossom into a true WR1 as the Bucs WRs age."
        },
        {
            pick: 9,
            team: "Winston's Warriors",
            player: "Quinshon Judkins - RB",
            description: "Great pick here for the Warriors. To get a back as talented as Judkins at the 1.09 is a steal."
        },
        {
            pick: 10,
            team: "Highland Hawgs",
            player: "Colston Loveland - TE",
            description: "Not the flashy pick, but the right pick. I love the value here getting Caleb Williams safety blanket for years to come."
        },
        {
            pick: 11,
            team: "Winston's Warriors",
            player: "Kaleb Johnson - RB",
            description: "Getting snaps at RB in the Steelers offense is almost a guaruntee.  Mike Tomlin gets another gritty back and the Warriors get another great RB."
        },
        {
            pick: 12,
            team: "Kilpatty Vegas",
            player: "Jaxson Dart - QB",
            description: "When you think Kilpatty Vegas, you think flashy. Dart is the epitome of a flashy pick and I love this landing spot."
        }
    ],
    round2: [
        {
            pick: 13,
            team: "Winston's Warriors",
            player: "Tyler Warren - TE",
            description: "Arguably the last elite player on the board. A great trade up for the Warriors lands them their TE of the future."
        },
        {
            pick: 14,
            team: "Rocky Top Rowdies",
            player: "Cam Skattebo - RB",
            description: "A hard-nosed runner with good balance and power. Skattebo brings a physical presence to the Rowdies' ground game."
        },
        {
            pick: 15,
            team: "Highland Hawgs",
            player: "RJ Harvey - RB",
            description: "One word here, value. The Hawgs get a Sean Payton RB who should see valuable snaps in year 1."
        },
        {
            pick: 16,
            team: "Highland Hawgs",
            player: "Luther Burden - WR",
            description: "Burden was arguably the WR1 preseason. Getting him here at 16 is a great pick up for the Hawgs."
        },
        {
            pick: 17,
            team: "Lil Peanut's Padres",
            player: "Jayden Higgins - WR",
            description: "A huge target with great hands. The Padres get a great WR who should see the field in a ceippled Houston WR room."
        },
        {
            pick: 18,
            team: "Winston's Warriors",
            player: "Tre Harris - WR",
            description: "Dominant big play threat going into a great system. A boom or bust pick, but Tre Harris could be a sleeper WR1 for the Chargers."
        },
        {
            pick: 19,
            team: "Winston's Warriors",
            player: "Brayshul Tuten - RB",
            description: "Tuten put on a show at the combine. Going into a confusing RB room in Jacksonville, he should have a chance to take the starting job."
        },
        {
            pick: 20,
            team: "The Dukes",
            player: "Jack Bech - WR",
            description: "This pick just screams Dukes. Bech is a high motor, smart, sneaky athletic WR who just plays the game the right way."
        },
        {
            pick: 21,
            team: "Memphis Jets",
            player: "Jaylin Noel - WR",
            description: "After losing a lot of key pieces in trades, the Jets get a boom or bust weapon who could explode in the NFL."
        },
        {
            pick: 22,
            team: "Expiring Goods",
            player: "Kyle Williams - WR",
            description: "A shifty receiver with good hands and route running. Williams is going into a Patriots offense with not many weapons. Expiring Goods get their guy."
        },
        {
            pick: 23,
            team: "Lil Peanut's Padres",
            player: "Pat Bryant - WR",
            description: "The Broncos only real threat last year was Courtland Sutton. The Padre's get another piece for their push to the playoffs.",
        },
        {
            pick: 24,
            team: "Rocky Top Rowdies",
            player: "Dylan Sampson - RB",
            description: "The Rowdies grab a hometown boy here. Judkins has already proved he is fine playing in a 2 RB system, leaving plenty of space for the SEC POTY to shine."
        }
    ]
};

// DOM Elements
const round1Picks = document.getElementById('round1-picks');
const round2Picks = document.getElementById('round2-picks');
const mobileDescription = document.getElementById('mobile-description');
const closeButton = document.querySelector('.close-button');

// Function to get player image URL from Sleeper
async function getPlayerImage(playerName) {
    try {
        // Remove position from player name for search
        const searchName = playerName.split(' - ')[0];
        console.log('Searching for player:', searchName);
        
        // Sleeper API endpoint for player search
        const response = await fetch(`https://api.sleeper.app/v1/players/nfl`);
        const players = await response.json();
        
        // Find player by name (case insensitive)
        const player = Object.values(players).find(p => 
            p.search_full_name?.toLowerCase() === searchName.toLowerCase() ||
            p.search_first_name?.toLowerCase() + ' ' + p.search_last_name?.toLowerCase() === searchName.toLowerCase()
        );
        
        if (player && player.search_rank) {
            // If player is found and has a rank, return their photo
            return `https://sleepercdn.com/content/nfl/players/thumb/${player.player_id}.jpg`;
        }
        
        // Fallback to UI Avatars if player not found
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(searchName)}&background=random`;
    } catch (error) {
        console.error('Error fetching player image:', error);
        return 'https://via.placeholder.com/60?text=No+Photo';
    }
}

// Create pick elements
async function createPickElement(pick) {
    try {
        const pickElement = document.createElement('div');
        pickElement.className = 'draft-card';
        
        const imageUrl = await getPlayerImage(pick.player);
        const [playerName, position] = pick.player.split(' - ');
        
        pickElement.innerHTML = `
            <div class="card-content">
                <div class="flex items-center space-x-4">
                    <img src="${imageUrl}" alt="${playerName}" class="w-16 h-16 rounded-full border-2 border-espn-red object-cover" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(playerName)}&background=random'">
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <span class="pick-number">${pick.pick}</span>
                            <span class="team-name">${pick.team}</span>
                        </div>
                        <h3 class="player-name">${playerName}</h3>
                        <p class="player-position">${position}</p>
                    </div>
                </div>
            </div>
            <div class="card-description">
                <div class="text-center max-w-sm">
                    <h4 class="description-text text-lg font-semibold mb-2">${playerName}</h4>
                    <p class="description-subtext">${pick.description}</p>
                </div>
            </div>
        `;

        // Mobile click functionality
        pickElement.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const title = document.getElementById('pick-title');
                const description = document.getElementById('pick-description');
                
                // Clear any existing image
                const existingImage = description.parentElement.querySelector('img');
                if (existingImage) {
                    existingImage.remove();
                }
                
                const modalImage = document.createElement('img');
                modalImage.src = imageUrl;
                modalImage.alt = playerName;
                modalImage.className = 'w-24 h-24 rounded-full border-2 border-espn-red mx-auto mb-4 object-cover';
                modalImage.onerror = function() {
                    this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(playerName)}&background=random`;
                };
                
                title.textContent = playerName;
                description.textContent = pick.description;
                description.parentElement.insertBefore(modalImage, title);
                mobileDescription.classList.remove('hidden');
            }
        });

        return pickElement;
    } catch (error) {
        console.error('Error creating pick element:', error);
        const errorElement = document.createElement('div');
        errorElement.className = 'draft-card';
        errorElement.innerHTML = `
            <div class="card-content">
                <div class="flex items-center space-x-4">
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <span class="pick-number">${pick.pick}</span>
                            <span class="team-name">${pick.team}</span>
                        </div>
                        <h3 class="player-name">${pick.player}</h3>
                    </div>
                </div>
            </div>
        `;
        return errorElement;
    }
}

// Initialize draft picks
async function initializeDraft() {
    try {
        console.log('Initializing draft...');
        
        // Clear existing picks
        round1Picks.innerHTML = '';
        round2Picks.innerHTML = '';
        
        console.log('Loading Round 1 picks...');
        for (const pick of draftData.round1) {
            const pickElement = await createPickElement(pick);
            round1Picks.appendChild(pickElement);
        }
        
        console.log('Loading Round 2 picks...');
        for (const pick of draftData.round2) {
            const pickElement = await createPickElement(pick);
            round2Picks.appendChild(pickElement);
        }
        
        console.log('Draft initialization complete!');
    } catch (error) {
        console.error('Error initializing draft:', error);
    }
}

// Close mobile description
document.querySelector('#mobile-description button').addEventListener('click', () => {
    mobileDescription.classList.add('hidden');
});

// Close mobile description when clicking outside
mobileDescription.addEventListener('click', (e) => {
    if (e.target === mobileDescription) {
        mobileDescription.classList.add('hidden');
    }
});

// Initialize the draft when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing draft...');
    initializeDraft();
}); 