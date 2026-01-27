/**
 * Gravity Pause - Personal Result System
 * Chase Hughes + Elite Designer Approved
 * 
 * This system provides personalized results based on birthdate.
 * Results are deterministic but opaque - they feel specific
 * without making falsifiable claims.
 * 
 * Key principles:
 * - Observation, not prediction
 * - Flattering but not manipulative
 * - Creates open loops for return visits
 */

(function() {
  'use strict';

  /**
   * Result buckets - carefully crafted archetypes
   * Each result follows the formula: Observation → Framing → Open loop
   * 
   * These are Chase Hughes-approved: they feel personal,
   * cannot be falsified, and encourage reflection.
   */
  const resultBuckets = [
    {
      id: 'stillness',
      text: `For people born around your date, this moment often registers as quiet clarity rather than a push to act. Many notice it more in hindsight than in the moment itself. You may find that pauses like this create space for thoughts you didn't know were waiting.`
    },
    {
      id: 'transition',
      text: `Those with your temporal signature tend to experience these pauses as thresholds — moments where one state quietly ends and another begins. You might notice a subtle shift in attention, as if something has reset without announcement.`
    },
    {
      id: 'reflection',
      text: `People born near your date often describe these moments as mirrors rather than windows. The pause doesn't show you something new — it shows you what was already there, waiting to be noticed. This tends to deepen over time.`
    },
    {
      id: 'grounding',
      text: `For your temporal pattern, Gravity Pauses often feel like anchors — brief moments where scattered thoughts settle. Many people with similar signatures report feeling more present afterward, though they rarely notice the shift as it happens.`
    },
    {
      id: 'anticipation',
      text: `Those born around your time tend to feel these pauses as quiet anticipation rather than rest. Something in your pattern responds to the moment before movement, the breath before speech. This is neither good nor bad — simply how your attention naturally orients.`
    },
    {
      id: 'release',
      text: `People with your birthdate pattern often experience these pauses as small releases — moments where tension you didn't know you were holding quietly dissolves. The effect is subtle but cumulative. Many notice it most clearly in retrospect.`
    },
    {
      id: 'observation',
      text: `For your temporal signature, Gravity Pauses tend to heighten observation rather than introspection. You may find yourself noticing details in your environment that were always there but somehow invisible. This quality often strengthens with repeated pauses.`
    },
    {
      id: 'integration',
      text: `Those born near your date often describe these moments as integrative — times when separate thoughts or feelings briefly align. The pause doesn't create anything new; it simply allows what's already present to settle into coherence.`
    },
    {
      id: 'receptivity',
      text: `People with your pattern tend to become more receptive during these pauses, though not in an obvious way. It's less about openness and more about reduced resistance. Many report that ideas or solutions arrive more easily in the hours following.`
    },
    {
      id: 'calibration',
      text: `For your temporal signature, these pauses often function as quiet calibrations — moments where your internal sense of time briefly synchronizes with something larger. The effect is subtle, but many with similar patterns report feeling more aligned afterward.`
    },
    {
      id: 'depth',
      text: `Those born around your date tend to experience these pauses with unusual depth. Where others might feel a brief stillness, you may notice layers — a pause within the pause. This isn't better or worse, simply how your attention naturally moves.`
    },
    {
      id: 'lightness',
      text: `People with your birthdate pattern often describe these moments as unexpectedly light. Rather than heaviness or gravity, there's a sense of buoyancy — as if something has been temporarily lifted. Many find this quality refreshing, though hard to explain.`
    },
    {
      id: 'clarity',
      text: `For your temporal signature, Gravity Pauses tend to bring brief clarity rather than calm. It's not that thoughts stop — they simply become more distinct, easier to see. This quality often proves useful for decisions that have been lingering.`
    },
    {
      id: 'continuity',
      text: `Those born near your date often experience these pauses as moments of continuity rather than interruption. The pause doesn't break your flow — it reveals that the flow was always there, beneath the surface activity. Many find this perspective quietly reassuring.`
    },
    {
      id: 'resonance',
      text: `People with your pattern tend to feel these pauses as resonance — a brief alignment between inner and outer rhythms. The sensation is subtle, often noticed only as a slight shift in how time feels. This quality tends to deepen with attention.`
    },
    {
      id: 'threshold',
      text: `For your temporal signature, these pauses often feel like standing in a doorway — neither fully in one room nor the other. This threshold quality can feel uncertain at first, but many with similar patterns come to appreciate it as a space of possibility.`
    }
  ];

  /**
   * Calculate bucket index from birthdate
   * Uses a simple but opaque algorithm
   */
  function calculateBucket(birthdate) {
    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    // Create a deterministic but non-obvious mapping
    const seed = (day * 31 + month * 12 + year) % resultBuckets.length;
    return seed;
  }

  /**
   * Get result for a given birthdate
   */
  function getResult(birthdate) {
    const bucketIndex = calculateBucket(birthdate);
    return resultBuckets[bucketIndex];
  }

  /**
   * Display the result
   */
  function displayResult(result) {
    const resultSection = document.querySelector('.result-section');
    const resultText = document.querySelector('.result-text');
    
    if (resultSection && resultText) {
      resultText.textContent = result.text;
      resultSection.classList.add('visible');
      
      // Smooth scroll to result
      resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  /**
   * Handle form submission
   */
  function handleSubmit(event) {
    event.preventDefault();
    
    const input = document.getElementById('birthdate');
    if (!input || !input.value) return;
    
    const result = getResult(input.value);
    displayResult(result);
    
    // Store in localStorage for return visits
    try {
      localStorage.setItem('gravityPause_birthdate', input.value);
      localStorage.setItem('gravityPause_lastVisit', new Date().toISOString());
    } catch (e) {
      // localStorage not available, continue silently
    }
  }

  /**
   * Check for returning visitor
   */
  function checkReturningVisitor() {
    try {
      const storedBirthdate = localStorage.getItem('gravityPause_birthdate');
      if (storedBirthdate) {
        const input = document.getElementById('birthdate');
        if (input) {
          input.value = storedBirthdate;
        }
      }
    } catch (e) {
      // localStorage not available, continue silently
    }
  }

  /**
   * Initialize personal system
   */
  function init() {
    const form = document.getElementById('personal-form');
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }
    
    // Check for returning visitor
    checkReturningVisitor();
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for potential external use
  window.gravityPausePersonal = {
    getResult: getResult,
    buckets: resultBuckets
  };
})();