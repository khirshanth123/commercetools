'use client';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

/**
 * An interactive component which expands/collapses a panel.
 */
const Collapsible = CollapsiblePrimitive.Root;
Collapsible.displayName = 'Collapsible';

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
